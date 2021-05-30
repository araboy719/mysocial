import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Message from "./components/content/Message/Message";
import Profile from "./components/content/Profile/Profile";
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Navbar />
        <Route path='/profile'
          render={() => <Profile
            ProfileData={props.state.PageProfile}
            dispatch={props.dispatch} />} />
        <Route path='/dialogs'
          render={() =>
            <Message
              MessageData={props.state.PageMessage}
              dispatch={props.dispatch}
            />} />
      </div>
    </BrowserRouter>
  );
}

export default App;