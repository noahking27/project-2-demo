import React, { Component } from 'react';
import { Signin, Signout } from './Signin';
import { userSession } from '../auth';
// import { Main } from './main';


export default class App extends Component {
  state = {
    userData: null,
  };

  handleSignOut(e) {
    e.preventDefault();
    this.setState({ userData: null });
    userSession.signUserOut(window.location.origin);
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.history.replaceState({}, document.title, '/');
        this.setState({ userData: userData });
      });
    } else if (userSession.isUserSignedIn()) {
      this.setState({ userData: userSession.loadUserData() });
    }
    // Calling Express backend server from React
    // this.callBackendAPI()
    //   .then(res => this.setState({ data: res.express }))
    //   .catch(err => console.log(err));
  }

  // fetching the GET route from the Express server which matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  render() {
    return (
      <div>
          {!userSession.isUserSignedIn() ? <Signin /> : <Signout/>}
      </div>
    );
  }
}
