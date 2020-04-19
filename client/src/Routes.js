import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Routes.css'
import Feed from './components/Feed/Feed';
import MasterContainer from './container/MasterContainer';

function Routes() {

  return (
    <Switch>
      <MasterContainer>
        <Route excat path="/" component={Feed} />
      </MasterContainer>
    </Switch>
  );
}

export default Routes;
