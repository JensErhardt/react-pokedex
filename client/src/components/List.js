import React, { Component } from 'react';

import SearchBar from './SearchBar';
import Sprite from './Sprite';
import api from '../api';

import './List.css'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: [],
      searchValue: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.getList = this.getList.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const searchValue = e.target.value.toUpperCase();
    this.setState({ searchValue })
  }

  getList() {
    api.getPokemon()
      .then(pokemon => {

        this.setState({
          pokemon,
        })
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getList();
  }

  render() {
    const pokemon = this.search();

    return (
      <div className="container">
        <h1 className="search-header">Pokedex</h1>
        <SearchBar
          onChange={this.handleChange}
        />
        <div className="row">
          <ul>
            {pokemon.map((e) =>
              <li className="m-1 pm-list-group-item" key={e._id}>
                <Sprite
                  id={e.pokemonId}
                  name={e.name}
                  front={e.sprites.front}
                  back={e.sprites.back}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }

  search() {
    return this.state.pokemon.filter(pokemon =>
      pokemon.name.toUpperCase().includes(this.state.searchValue.toUpperCase()))
  }
}

export default List;