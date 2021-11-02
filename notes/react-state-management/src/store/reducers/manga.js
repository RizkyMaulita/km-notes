import { SETDATAMANGAS_TYPE, SETLOADING_TYPE } from "../actions/manga"

const initialState = {
  dataMangas: [],
  loading: false
}

const mangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETDATAMANGAS_TYPE:
      return {
        ...state,
        dataMangas: action.payload
      }
    case SETLOADING_TYPE:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

export default mangaReducer