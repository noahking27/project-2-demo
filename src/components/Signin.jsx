import React from 'react';
import { authenticate, disconnect } from '../auth';
import { Text } from '@blockstack/ui';
import { getUserData } from '../auth';

// Main handlebars HTML template. This is a necessity and it handles page formatting. 
import { Main } from './handlebars/main';

// Various user pages (Owner / Walker). pets-cards, nav-block, and jobs-card are currently 
// contained within each one of these files as needed. It may be more appropriate
// to create standalone JS files for re-use. The current set up is NOT DRY.
import { Dashboard } from './handlebars/dashboard';
import { Homepage } from './handlebars/homepage';
import { Jobsearch } from './handlebars/jobsearch';
import { WalkerDash } from './handlebars/walker-dashboard';

// Signin function. Based on the App.jsx --> render() terenary operator this
// is the truthy value and exports on the Homepage. Once the user is logged in, 
// then Signout() exports.
export const Signin = () => {
  console.log("Sign in");
  return (
    <div>
      <div>
        <div className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <a className="navbar-brand" href="/">Scout</a>
            <ul className="nav navbar-nav ml-auto"></ul>
          <button type="button" className="btn success" onClick={() => authenticate()}>Login</button>
        </div>
      </div>
      <Main />
      <Homepage />
    </div>
  );
};

// Signout function. Based on the App.jsx --> render() terenary operator this
// is the falsy value and exports once the user logs in. Once the user is logged in, 
// then Signout() exports.
export const Signout = () => {
  console.log("Sign out");
  const stxAddress = getUserData().profile.stxAddress.mainnet;
  const shortenedStxAddress = stxAddress.substr(0, 4) + "...." + stxAddress.substr(stxAddress.length-4, stxAddress.length);
  return (
    <div>
      <div>
        <div className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <a className="navbar-brand" href="/">Scout</a>
          <ul className="nav navbar-nav ml-auto"></ul>
          <Text margin="10px" color= "#55C35E" fontWeight="500">{shortenedStxAddress} </Text>
          <button type="button" className="btn success" onClick={() => disconnect()}>Logout</button>
        </div>
      </div>
      <Main /> 
      {/* Hardcode your two Hiro Web App Account addresses to toggle between views */}
      {/* If you find the key in the Owners Table then render the Owner Dashboard.  */}
      {stxAddress === 'SP29AZWNBFXEHJGBQ2BMQ71W8R79DCA3NZQ7QJ367' ? <Dashboard /> : console.log("Not Account 1")}
      {/* If you find the key in the Walker Table then render the Walker Dashboard.  */}
      {stxAddress === 'SP206YJ9G14C3FD0JZE3C92KZ3V35JVNVW93Q0VKQ' ? <Jobsearch /> : console.log("Not Account 2")}
    </div>
    
  );
};