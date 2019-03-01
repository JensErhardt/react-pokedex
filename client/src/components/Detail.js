import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
    }
  }

  render() {
    console.log(this.props.match.params.id)
    return (
      <div className="container">
        <h1>Pokemon Detail</h1>
      </div>
    )
  }
}

export default Detail;