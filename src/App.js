import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Message from "./components/content/Message/Message";
import Profile from "./components/content/Profile/Profile";
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";

const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Navbar />

        <Route path='/profile'component={Profile} />
        <Route path='/dialogs' render={ () => <Message dialog={props.dialog} chat={props.chat}/>} />
      </div>
    </BrowserRouter>
  );
}

export default App;
