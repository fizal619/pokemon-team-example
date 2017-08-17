import './App.css';
import logo from './logo.svg';

import thunk from 'redux-thunk'
import React, { Component } from 'react';
import pokemon from 'pokedex-promise-v2'

import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

import Team from './components/Team.js';
import PokemonList from './components/PokemonList.js';

import api from './actions'

const P = new pokemon();

let store = createStore(reducer, applyMiddleware(thunk));


class App extends Component {

  componentDidMount(){
    store.dispatch(api())
  }

  render(){
    return (
      <Provider store={store}>
        <div className="App">
            <PokemonList />

          </div>
      </Provider>
    );
  }
}

export default App;
