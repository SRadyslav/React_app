import React, { Component} from 'react';
import './App.css';
import { Route, withRouter, HashRouter, Switch, Redirect } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Video from './components/Video/Video';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';
import store, { AppStateType } from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))



type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {initializeApp:() => void}

const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedDialogs = withSuspense(DialogsContainer)

class App extends Component<MapPropsType &  DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some error occurred");
  }
  componentDidMount() {
    
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <div className="container">
          <HeaderContainer />
          <NavBar />
          <div className='app-wrapper-content'>
            <Switch>
              <Route path="/profile/:userId?" render={() => <SuspendedProfile /> } />
              <Route path="/users" render={() => <UsersContainer /> } />
              <Route path="/dialogs" render={() => <SuspendedDialogs /> } />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music likeCount={10} />} />
              <Route path="/video" render={() => <Video  likeCount={1} />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/login" render={() => <Login />} />
              <Route exact path="/" render={() => <SuspendedProfile /> } />
              <Route exact path='/' render={({ location }) => <Redirect to={location.hash.replace('#', '')} />} />
              <Route path="*" render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainJSApp: React.FC = () => {
  return <HashRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default MainJSApp;