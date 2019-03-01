import React, { PureComponent } from 'react';

import Sprite from "./Sprite";

import './List.css'

class List extends PureComponent {
  render() {
    return (
      <div className="row">
        <ul>
          {this.props.pokemon.map((e) =>
            <li className="m-1 pm-list-group-item" key={e._id}>
              <Sprite
                id={e.pokemonId}
                name={e.name}
                front={e.sprites.front}
                back={e.sprites.back}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }

  flipFront(event, date) {
    return event.currentTarget.src = date.sprites.front;
  }

  flipBack(event, date) {
    return event.currentTarget.src = date.sprites.back;
  }
}

export default List;