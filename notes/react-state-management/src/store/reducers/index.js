import animeReducer from './anime'
import favoriteReducer from './favorite'
import mangaReducer from './manga'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  animes: animeReducer,
  favorites: favoriteReducer,
  mangas: mangaReducer
})

export default rootReducer