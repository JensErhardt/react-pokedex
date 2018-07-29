import React, { Component } from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './PokemonList.css'

class PokemonList extends Component {

  render() {

    console.log("DEBUG PokemonList props", this.props.pokemon)

    return (
      <Container className="container-fluid">

        <React.Fragment>
          <Row>
            <div className="pokemon-list">
              <Row>
                {this.props.pokemon
                  .map((e) =>
                    <div className="col-md-1 m-5 pokemon-list-group-item" key={e._id}>
                      <img className="pokemon-item-sprite-front" src={e.sprites.front} alt="list-item-pic" />
                      {e.name}
                    </div>
                  )}
              </Row>
            </div>
          </Row>
        </React.Fragment>

      </Container>
    );
  }
}

export default PokemonList;