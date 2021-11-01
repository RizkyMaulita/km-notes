import { SETLOADING_TYPE, SETDATAANIMES_TYPE } from "../actions/anime"

const dummyData = {
  imageUrl: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
  title: 'Fullmetal Alchemist: Brotherhood',
  url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
  type: 'TV'
}

const initialState = {
  // dataAnimes: [dummyData],
  dataAnimes: [],
  loading: false
}

const animeReducer = ( state = initialState, action ) => {
  // params 1 => pemanggilan pakai useSelector
  // params 2 => pemanggilan pakai useDispatch
  if (action) {
    // console.log(action , '<<< action in anime reducer')
  }
  /*
    supaya pemanggilan action dari satu reducer dengan reducer yang lain berbeda, maka
    action.type harus UNIQUE

    cara pembuatan action.type nya unique, biasanya mempunyai pola seperti berikut
      reducerName/reducerType
      
      => anime/setLoading
  */

  switch (action.type) {
    // case 'anime/setLoading':
    //   return { 
    //     ...state,
    //     loading: true
    //   }
    case SETLOADING_TYPE:
      return { 
        ...state,
        loading: true
      }
    case SETDATAANIMES_TYPE:
      // return 'test' // walaupun bisa, namun ini kurang baik karena tidak sesuai dengan initial state
      // const newObject = {...state}  // lakukan deep copy, supaya menghindari pass by reference
      // newObject.dataAnimes = [dummyData]
      // // console.log(newObject, '<<<')
      // return newObject
      return {
        ...state,
        // dataAnimes: [dummyData]
        dataAnimes: action.payload
      }
    default:
      return state
  }
  // return state
}

export default animeReducer