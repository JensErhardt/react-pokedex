import React, { Component } from 'react';
import './List.css'

class List extends Component {

  render() {
    console.log("RENDERED")
    return (
      <div className="row">
        <div className="pokemon-list">
          <div className="row">
            {this.props.pokemon
              .map((e) =>
                <div className="col-md-1 m-5 pm-list-group-item" key={e._id}>
                  <img
                    className="pull-right"
                    src={e.sprites.back}
                    alt="list-item-pic"
                    onMouseOver={(event) => {
                      return (event.currentTarget.src = e.sprites.front);
                    }}
                    onMouseOut={(event) => {
                      return event.currentTarget.src = e.sprites.back;
                    }}
                  />
                  {e.name}
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default List;