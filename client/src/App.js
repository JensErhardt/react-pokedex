import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Detail from './components/Detail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/pokemon/:id" component={Detail} />

          <Home />
        </Switch>
      </div>
    )
  }
}

export default App;
