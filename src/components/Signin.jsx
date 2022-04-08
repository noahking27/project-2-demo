import React from 'react';
import { authenticate, disconnect } from '../auth';
import { Text } from '@blockstack/ui';
import { getUserData } from '../auth';
import { Dashboard } from './dashboard';

export const Signin = () => {
  return (
    <div className="connect_btn_placement">
      <button type="button" className="btn btn-primary" onClick={() => authenticate()}>Connect</button>
    </div>
  );
};
export const Signout = () => {
  const stxAddress = getUserData().profile.stxAddress.mainnet;
  // const shortenedStxAddress = stxAddress.substr(0, 4) + "...." + stxAddress.substr(stxAddress.length-4, stxAddress.length);
  return (
    <div>
      <div className="connect_btn_placement">
        <Text margin="10px" color= "blue" fontWeight="500">{stxAddress} </Text>
        <button type="button" className="btn btn-primary" onClick={() => disconnect()}>Disconnect</button>
      </div>
      <Dashboard />
    </div>
    
  );
};