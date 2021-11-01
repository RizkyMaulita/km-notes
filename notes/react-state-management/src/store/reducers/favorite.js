const initialState = {
  dataFavorites: [],
  loading: false
}

const favoriteReducer = ( state = initialState, action ) => {
  if (action) {
    // console.log(action, '<<< action in favorite reducer')
  }
  return state
}

export default favoriteReducer