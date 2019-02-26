import React, { Component } from 'react';

import api from './api';
import List from './components/List';
import Searchbar from './components/SearchBar';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      searchValue: "",
    }
    api.loadUser();

    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const searchValue = e.target.value.toUpperCase();
    this.setState({ searchValue })
  }

  getAllPokemon() {
    api.getPokemon()
      .then(pokemon => {
        this.setState({
          pokemon,
        })
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getAllPokemon();
  }

  render() {

    const pokemon = this.search();

    return (
      <div className="App">
        <div className="top-bar" />
        <div className="container">
          <h1 className="search-header">Pokedex</h1>
          <Searchbar
            onChange={this.handleChange}
          />
          <List
            pokemon={pokemon}
          />
        </div>
      </div>
    );
  }

  search() {
    return this.state.pokemon.filter(pokemon =>
      pokemon.name.toUpperCase().includes(this.state.searchValue.toUpperCase()))
  }

  logout(e) {
    e.preventDefault();
    api.logout()
  }
}

export default App;
