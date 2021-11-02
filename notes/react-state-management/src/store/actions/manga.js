export const SETLOADING_TYPE = 'manga/setLoading'
export const SETDATAMANGAS_TYPE = 'manga/setDataMangas'

export const setLoadingAction = ( isLoading ) => {
  return {
    type: SETLOADING_TYPE,
    payload: isLoading
  }
}

export const setDataMangasAction = ( data ) => {
  return {
    type: SETDATAMANGAS_TYPE,
    payload: data
  }
}

// const fetchMangaThunk = ( dispatch, getState ) => {
//   fetch('https://api.jikan.moe/v3/top/manga')
//     .then(response => response.json())
//     .then(data => {
//       const mangas = data.top
//       dispatch(setDataMangasAction(mangas))
//     })
//     .catch(err => console.log(err))
// }

export const fetchMangas = () => {
  // ------------ INI tidak berjalan karena akan error 
  // fetch('https://api.jikan.moe/v3/top/manga')
  //     .then(response => response.json())
  //     .then(data => {
  //       const mangas = data.top
  //       // console.log(mangas)
  //       // dispatch(setDataMangasAction(mangas))
  //       setDataMangasAction(mangas)
  //     })
  //     .catch(err => console.log(err))

  //------- Ini menggunakan thunk
  return (dispatch, getState) => {
    console.log(getState(), '<<< get state')
    dispatch(setLoadingAction(true))
    fetch('https://api.jikan.moe/v3/top/manga')
      .then(response => response.json())
      .then(data => {
        const mangas = data.top
        // console.log(mangas)
        dispatch(setDataMangasAction(mangas))
        // setTimeout(() => {
        //   dispatch(setLoadingAction(false))
        // }, 3000)
      })
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => {
          dispatch(setLoadingAction(false))
        }, 3000)
      })
  }

  // cara kedua
  // return fetchMangaThunk
}

export const getLoading = () => {
  return ( dispatch, getState ) => {
    const mangas = getState().mangas
    return mangas.loading
  }
}