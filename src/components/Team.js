import React, { Component } from 'react';
import PokemonInfo from './PokemonInfo.js';
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    team: state.team
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
    }
}

const Team = props => {
  return (
    <div className="list">
      <h2>TEAM</h2>
      {props.team.map(mon=>{
        return <PokemonInfo name={mon} />
      })}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);
