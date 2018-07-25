import React, { Component } from 'react';

class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {         
    
    console.log (this.props.pokemon)
    return (
      <div className="Home">
        <h2>POKEMON</h2>
        {/* <p>Name: {this.props.pokemon.name}</p> */}
        {/* <img src={this.props.pokemon.sprites.front} alt="poke-front"/> */}
      </div>
    );
  }
}

export default Home;
