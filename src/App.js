import Preloader from "components/common/preloader/Preloader";
import Login from "components/content/Login/Login";
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import './App.css';
import MessageContainer from "./components/content/Message/MessageContainer";
import ProfileContainer from "./components/content/Profile/ProfileContainer";
import UsersContainer from "./components/content/Users/UsersContainer";
import HeaderComponent from './components/Header/HeaderContainer';
import Navbar from "./components/Navbar/Navbar";
import { initializeApp } from './redux/App-Reducer';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderComponent />
          <Navbar />
          <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <MessageContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />

          <Route path='/login' render={() => <Login />} />
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.AppData.initialized
  }
}

export default compose(
  connect(mapStateToProps, { initializeApp })
)(App);