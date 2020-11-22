import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Musik/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/dialogs"
         render={ () => <DialogsContainer/>}/>
        <Route path="/profile"
         render={ () => <Profile/>}/>
        <Route path="/news" render={ () => <News/>}/>
        <Route path="/music" render={ () => <Music/>}/>
        <Route path="/settings" render={ () => <Settings/>}/>
      </div>
       
    </div>
  );
};

export default App;
