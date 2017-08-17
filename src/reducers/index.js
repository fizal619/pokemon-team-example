const initialState = {
  pokemon: [
    { name: "pikachu"}
  ],
  team: []
}


export default (state=initialState, action)=> {
  switch(action.type){

    case 'LOAD_POKEMON':
      return {
        ...state,
        pokemon: action.pokemon
      }

    default:
      return state;
  }
}
