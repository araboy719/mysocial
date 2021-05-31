import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import MessageContainer from "./components/content/Message/MessageContainer";
import ProfileContainer from "./components/content/Profile/ProfileContainer";
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Navbar />
        <Route path='/profile'
          render={() => <ProfileContainer />} />
        <Route path='/dialogs'
          render={() =>
            <MessageContainer />} />
      </div>
    </BrowserRouter>
  );
}

export default App;