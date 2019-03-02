import React, { Component } from 'react';

import { getTypes } from "./types";
import api from '../api';

import "./Detail.css";

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
    }
  }

  getDetail(id) {
    api.getOnePokemon(id)
      .then(pokemon => {
        this.setState({
          dbId: pokemon.id,
          height: pokemon.height,
          weight: pokemon.weight,
          name: pokemon.name,
          id: pokemon.pokemonId,
          species: pokemon.species,
          sprites: pokemon.sprites,
          stats: pokemon.stats,
          types: pokemon.types
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getDetail(id);
  }

  render() {
    const state = this.state;
    const types = state.types;

    return (
      <div className="detail-view-bg" style={types && { background: getTypes(types) }} >
          <div id="detail-panel">
            <div id="detail-panel-header" style={types && { background: getTypes(types) }}>
            <h1>{state.name}</h1>
            </div>
            <p>This a test with css</p>
            <div className="div">TEST</div>
        </div>
      </div>
    )
  }
}

export default Detail;