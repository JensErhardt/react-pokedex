import React from 'react';
import { Link } from 'react-router-dom';

import { getTypes } from './types';

import "./Sprite.css"

const Sprite = ({ id, name, front, back, types }) => {

  const flipFront = (e) => {
    e.preventDefault();
    return e.currentTarget.src = front;
  }

  const flipBack = (e) => {
    e.preventDefault();
    return e.currentTarget.src = back;
  }

  return (
    <div className="m-2 pm-list-group-item pm-sprite" style={{ background: getTypes(types) }}>
      <Link className="pm-list-link" to={"/pokemon/" + id}>
        <img
          className="mt-2"
          src={back}
          alt="poke-pic"
          onMouseOver={(event) => flipFront(event)}
          onMouseOut={(event) => flipBack(event)}
        />
        <span className="sprite-text">{name}</span>
      </Link>
    </div>
  )
}

export default Sprite;