import React from 'react';
import './App.css';
import {Route } from "react-router-dom";

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Video from './components/Video/Video';



const App = (props) => {
  return (
    <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path="/profile" render={() => <Profile 
            posts={props.state.profilePage.posts} />} />
          <Route /*exact*/ path="/dialogs"
            render={() => <Dialogs
              dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/video" render={() => <Video />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
    </div>
  );
}

export default App;
