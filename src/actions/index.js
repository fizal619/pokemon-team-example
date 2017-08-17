
export default () => {
  return function (dispatch) {
    fetch('https://pokeapi.co/api/v2/pokemon/').then(r => r.json()).then(pokemon=> {
      console.log(pokemon)
      dispatch({
        type: 'LOAD_POKEMON',
        pokemon: pokemon.results,
      })
    })
  }
}
