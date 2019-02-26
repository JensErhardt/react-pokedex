import React,{ PureComponent } from 'react';

import './SearchBar.css';

class Searchbar extends PureComponent {
  render() {
    return (
      <div className="search-bar-wrapper">
        <input
          id="pokemon-search-bar"
          type="text"
          className="form-control"
          name="search"
          placeholder="Search for Pokémon"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default Searchbar;