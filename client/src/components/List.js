import React, { Component } from 'react';

import SearchBar from './SearchBar';
import Sprite from './Sprite';
import api from '../api';

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: [],
      searchValue: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.getMob = this.getMob.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const searchValue = e.target.value.toUpperCase();
    this.setState({ searchValue })
  }

  getMob() {
    api.getAllPokemon()
      .then(pokemon => {
        const list = this.loadList(pokemon);
        this.setState({
          pokemon: list
        });
      })
      .catch(err => console.log(err));
  }

  loadList(pokemon) {
    const list = [];

    for (const i in pokemon) {
      list.push({ 
          id: pokemon[i].pokemonId,
          name: pokemon[i].name,
          front: pokemon[i].sprites.front,
          back: pokemon[i].sprites.back,
          types: pokemon[i].types
        });
    }
    return list;
  }

  componentDidMount() {
    this.getMob();
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
             // <li key={e.pokemonId} className="m-1 pm-list-group-item">
                <Sprite
                  id={e.id}
                  name={e.name}
                  front={e.front}
                  back={e.back}
                  types={e.types}
                />
            //  </li>
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