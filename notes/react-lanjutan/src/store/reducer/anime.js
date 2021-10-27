const initialState = {
  dataAnimes: [],
  totalData: 0
}

const animeReducer = ( state = initialState, action ) => {
  if (action.type.includes('anime')) {
    console.log(action, '<<<< ini action di anime reducer')
  }

  return state
}

export default animeReducer