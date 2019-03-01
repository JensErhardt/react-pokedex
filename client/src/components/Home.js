import React, { Component } from 'react';

import List from './List';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="top-bar" />
          <List />
      </div>
    );
  }
}

export default Home;
