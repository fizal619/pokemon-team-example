import React, { Component } from 'react';
import logo from './logo.svg';
import pokemon from 'pokedex-promise-v2'
import './App.css';
const P = new pokemon();

class PokemonInfo extends Component {

  constructor(props){
    super(props)
    this.state = {
      pokemon: {},
      picture: "https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif"
    }
  }

  componentDidMount(){
    if(this.props.team){
      P.getPokemonByName(this.props.name).then(pokemon=>{
        this.setState({
          picture: pokemon.sprites.front_default
        })
      })
    }
  }



  render(){

    return (
      <div onClick={this.props.add} className="dex">
        <h3>{this.props.name}</h3>
        {this.props.team ? <img src={this.state.picture} /> : null}
      </div>
    )
  }
}

const PokemonList = props =>{
  return (
    <div className="list">
    <h2>ALL POKEMON</h2>
    {props.list.map((mon, key) =>{
      return <PokemonInfo key={key} add={props.add} name={mon.name} />
    })}
  </div>
  )
}


const Team = props => {
  return (
    <div className="list">
      <h2>TEAM</h2>
      {props.list.map(mon=>{
        return <PokemonInfo team={true} name={mon} />
      })}
    </div>
  )
}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      pokemon: [],
      team: []
    }
  }

  addToTeam(event){
    let team = [...this.state.team, event.target.textContent]
    console.log(team)
    this.setState({
      team
    })
  }

  componentDidMount(){
    let self = this;
    P.getPokemonsList().then(pokemon => {
      self.setState({
        pokemon: pokemon.results
      });
      console.log('POKEMON?', pokemon.results)
    });
  }

  render() {
    return (
      <div className="App">
        <PokemonList add={this.addToTeam.bind(this)} list={this.state.pokemon} />
        <Team list={this.state.team} />
      </div>
    );
  }
}

export default App;
