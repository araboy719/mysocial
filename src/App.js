import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import MessageContainer from "./components/content/Message/MessageContainer";
import ProfileContainer from "./components/content/Profile/ProfileContainer";
import UsersContainer from "./components/content/Users/UsersContainer";
import HeaderComponent from './components/Header/HeaderContainer';
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderComponent />

        <Navbar />
        <Route path='/profile/:userID?' render={() => <ProfileContainer />} />

        <Route path='/dialogs' render={() => <MessageContainer />} />

        <Route path='/users' render={() => <UsersContainer />} />
      </div>
    </BrowserRouter>
  );
}

export default App;