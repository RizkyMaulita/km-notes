import animeReducer from './anime'
import favoriteReducer from './favorite'
import mangaReducer from './manga'
import { combineReducers } from 'redux'
import catalogReducer from './catalog'

const rootReducer = combineReducers({
  animes: animeReducer,
  favorites: favoriteReducer,
  mangas: mangaReducer,
  catalog: catalogReducer
})

export default rootReducer