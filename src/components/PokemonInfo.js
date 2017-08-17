import React, { Component } from 'react';

const PokemonInfo = props => {
  return (
    <div data-potato={props.name} className="dex">
      <h3>{props.name}</h3>
      {props.team ? <img src={props.picture} /> : null}
    </div>
  )
}
export default PokemonInfo
