import React, { Component } from 'react';

import api from '../api';
import List from './List';
import Searchbar from './SearchBar';

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

  logout(e) {
    e.preventDefault();
    api.logout()
  }
}

export default Home;
