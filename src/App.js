import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Musik/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/dialogs"
         render={ () => <DialogsContainer/>}/>
        <Route path="/profile/:userId"
         render={ () => <ProfileContainer/>}/>
        <Route path="/news" render={ () => <News/>}/>
        <Route path="/music" render={ () => <Music/>}/>
        <Route path="/settings" render={ () => <Settings/>}/>
        <Route path="/users" render={() => <UsersContainer/>}/>
      </div>
       
    </div>
  );
};

export default App;
