// import { setStatusType } from "../actions/manga"

const initialState = {
  dataMangas: [],
  totalData: 50,
  status: false
}

const mangaReducer = ( state = initialState, action ) => {
  // if (action.type.includes('manga')) {
  //   console.log(action, '<<<< ini action di manga reducer')
  //   return {
  //     ...state,
  //     status: true
  //   }
  // }

  // return state
  switch(action.type) {
    // case setStatusType: // tata cara penulisan reducerName/action
    //   return {
    //     ...state,
    //     status: true
    //   }
    case 'manga/setStatus':
      return {
        ...state,
        status: true
      }
    case 'manga/setTotalData':
      const newTotalData = state.totalData + action.payload
      return {
        ...state,
        totalData: newTotalData
      }
    default:
      return state
  }
  // return state
}

export default mangaReducer