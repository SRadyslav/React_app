import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Video from './components/Video/Video';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/redux-store';





class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
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
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route /*exact*/ path="/dialogs"
              render={() => <DialogsContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/video" render={() => <Video />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps= (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose( withRouter, connect(mapStateToProps,{initializeApp}))(App);

const MainJSApp = (props) => {
  return <BrowserRouter>
            <Provider store={store} >
                <AppContainer />
            </Provider>
        </BrowserRouter>
} 

export default MainJSApp;