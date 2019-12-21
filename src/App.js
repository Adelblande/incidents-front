import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './globals';
import Home from './components/Home';
import Detail from './components/Detail';
import Edit from './components/Edit';
import Create from './components/Create';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail" component={Detail} />
          <Route path="/edit" component={Edit} />
          <Route path="/create" component={Create} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}
