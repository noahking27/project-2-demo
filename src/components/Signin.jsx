import React from 'react';
import { authenticate } from '../auth';

export const Signin = () => {
  return (
    <div className="connect_btn_placement">
      <button type="button" class="btn btn-primary" onClick={() => authenticate()}>Connect</button>
    </div>
  );
};
