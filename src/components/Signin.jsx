import React from 'react';
import { authenticate, disconnect } from '../auth';
import { Text } from '@blockstack/ui';
import { getUserData } from '../auth';
import { Dashboard } from './handlebars/dashboard';
import { Main } from './handlebars/main';
import { Homepage } from './handlebars/homepage';
import { Jobsearch } from './handlebars/jobsearch';
import { WalkerDash } from './handlebars/walker-dashboard';

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
      {stxAddress === 'SP29AZWNBFXEHJGBQ2BMQ71W8R79DCA3NZQ7QJ367' ? <Dashboard /> : console.log("Not Account 1")}
      {stxAddress === 'SP206YJ9G14C3FD0JZE3C92KZ3V35JVNVW93Q0VKQ' ? <WalkerDash /> : console.log("Not Account 2")}
    </div>
    
  );
};