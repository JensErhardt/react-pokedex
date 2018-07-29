import React, { Component } from 'react';
import { Container, Input } from 'reactstrap';
import './SearchBar.css';

class Searchbar extends Component {

  render() {

    return (
      <Container className="search-bar-wrapper">
        <h1 className="search-header">Pokedex.org</h1>
        <Input
          id="pokemon-search-bar"
          type="text"
          name="search"
          placeholder="Search for Pokémon"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </Container>
    )
  }
}

export default Searchbar;