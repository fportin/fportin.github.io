import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import GreetingPage from './GreetingPage';
import HomePage from './Homepage';

function App() {
  return (
    <div className='page__container'>
      <Switch>
        <Route exact path='/'>
          <GreetingPage />
        </Route>
        <Route exact path='/home'>
          <HomePage />
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
