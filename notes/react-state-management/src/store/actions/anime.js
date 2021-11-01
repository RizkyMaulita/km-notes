export const SETLOADING_TYPE = 'anime/setLoading'
export const SETDATAANIMES_TYPE = 'anime/setDataAnimes'

export const setLoadingAction = ( data ) => {
  return {
    type: SETLOADING_TYPE,
    payload: data
  }
}

export const setDataAnimesAction = ( data ) => {
  return {
    type: SETDATAANIMES_TYPE,
    payload: data
  }
}