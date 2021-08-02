import React from "react";
import { HashRouter, Route } from "react-router-dom";

import GreetingPage from './GreetingPage';
import HomePage from './Homepage';

function App() {
  return (
    <div className='page__container'>
      <HashRouter basename='/'>
        <Route exact path='/'>
          <GreetingPage />
        </Route>
        <Route exact path='/home'>
          <HomePage />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
