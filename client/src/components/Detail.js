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
          flavorText: pokemon.species.flavorText,
          front: pokemon.sprites.front,
          back: pokemon.sprites.back,
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

          <div id="detail-header">
            <div id="monster-sprite">
              <img
                src={state.front}
                alt="monster-sprite"
              />
            </div>
            <div id="detail-infobox">
              <div id="detail-types-num">
                {types && this.renderTypes(types)}
                {state.id && this.renderId(state.id)}
              </div>
              <div id="detail-stats">
                {state.stats && this.renderStats(state.stats)}
              </div>
            </div>
          </div>

          <div id="detail-below-header">
            {state.flavorText}
          </div>

        </div>

        <div class="bg">
          <span class="shape"></span>
        </div>
      </div>
    )
  }
  renderTypes(types) {
    return types.map(e =>
      <div
        id="detail-type"
        style={types && { background: getTypes(types) }}>{e}
      </div>
    )
  }

  renderId(id) {
    return <div id="detail-id">#{id}</div>
  }

  renderStats(stats) {
    return stats.map(e =>
      <div id="detail-stats-row">{e.name} {e.base}</div>
    )
  }
}

export default Detail;