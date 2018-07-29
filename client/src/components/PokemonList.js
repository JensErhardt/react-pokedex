import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class PokemonList extends Component {

  render() {

    console.log("DEBUG PokemonList props", this.props.pokemon)



    return (
      <div className="PokemonList"> 
      <h1>PokemonList</h1>
      <React.Fragment>
        <ul className="pokemon-list">
          {this.props.pokemon
            .map((e) =>
              <li className="pokemon-list-item" key={e._id}>{e.name}
              <img src={e.sprites.front} alt="list-item-pic" />
              </li>)}
        
        </ul>
            


      </React.Fragment>
      </div>  
    );
  }
}

export default PokemonList;