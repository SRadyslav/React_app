import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Video from './components/Video/Video';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path="/profile" render={() => <Profile />} />
        <Route /*exact*/ path="/dialogs"
          render={() => <DialogsContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/video" render={() => <Video />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
