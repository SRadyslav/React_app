import React, { Component } from 'react';
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
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
//import ProfileContainer from './components/Profile/ProfileContainer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))





class App extends Component {
  catchAllUnhandledErrors = () => {
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
          <HeaderContainer className="header" />
          <NavBar className="navBar" />
          <div className='app-wrapper-content'>
            <Switch>
              <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/dialogs"
                render={withSuspense(DialogsContainer)} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/video" render={() => <Video />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/login" render={() => <Login />} />
              <Route exact path="/" render={withSuspense(ProfileContainer)} />
              <Route exact path='/' render={({ location }) => <Redirect to={location.hash.replace('#', '')} />} />
              <Route path="*" render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainJSApp = (props) => {
  return <HashRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default MainJSApp;