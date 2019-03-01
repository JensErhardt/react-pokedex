import React, { PureComponent } from 'react';
import { Link, Route } from 'react-router-dom';

import Detail from './Detail';

import './List.css'

class List extends PureComponent {

  flipFront(event, date) {
    return event.currentTarget.src = date.sprites.front;
  }

  flipBack(event, date) {
    return event.currentTarget.src = date.sprites.back;
  }

  render() {
    return (
      <div className="row">
        <div className="row">
          <ul>
            {this.props.pokemon.map((e) =>
              <li className="m-1 pm-list-group-item" key={e._id}>
                <Link className="pm-list-link" to="/pokemon/">
                  <img
                    className="mt-2"
                    src={e.sprites.back}
                    alt="list-item-pic"
                    onMouseOver={(event) => this.flipFront(event, e)}
                    onMouseOut={(event) => this.flipBack(event, e)}
                  />
                  <span className="sprite-text">{e.name}</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;