import React, { Component } from 'react';
import PokemonInfo from './PokemonInfo.js';
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  }
}

const mapDispatchToProps = dispatch => {
  return {

    }
}

const PokemonList = props =>{
  return (
    <div className="list">
    <h2>ALL POKEMON</h2>
      {props.pokemon.map((mon, key) =>{
        return <PokemonInfo key={key} name={mon.name} />
      })}
    </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
