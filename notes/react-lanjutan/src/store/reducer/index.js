// const initialState = {
//   count: 0,
//   name: '',
//   status: ''
// }

// const reducer = ( state = initialState, action ) => {
//   return state
// }

// export default reducer

import animeReducer from "./anime";
import mangaReducer from "./manga";
import { combineReducers } from 'redux'

const reducer = combineReducers({
  animes: animeReducer,
  mangas: mangaReducer
})

export default reducer