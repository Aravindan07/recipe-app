import React from 'react';
import GlobalStyle from './globalStyle';
import {Route,Switch} from 'react-router-dom';
import HomePage from './Homepage';
import Details from './Details';

function App() {
  return (
    <>
    <GlobalStyle />
    <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/:id" component={Details}/>
    </Switch>
    </>
  );
}

export default App;
