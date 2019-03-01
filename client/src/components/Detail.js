import React, { Component } from 'react';

import api from '../api';

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
    }
  }

  getOne(id) {
    api.getOnePokemon(id)
      .then(pokemon => {
        console.log("Detail getOne", pokemon)
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getOne(this.props.match.params.id)
  }

  render() {
    return (
      <div className="container">
        <h1>Pokemon Detail</h1>
      </div>
    )
  }
}

export default Detail;