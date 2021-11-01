import animeReducer from './anime'
import favoriteReducer from './favorite'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  animes: animeReducer,
  favorites: favoriteReducer
})

export default rootReducer