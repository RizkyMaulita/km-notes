import React, { useEffect } from "react"
import Navbar from "../components/Navbar"
import { useSelector, useDispatch } from "react-redux"
import { fetchMangas, setDataMangasAction, getLoading } from "../store/actions/manga"
import dummyData from '../assets/data/manga.json'
import Card from "../components/Card"

export default function Manga () {
  // const dataMangas = useSelector(rootState => rootState.mangas.dataMangas)
  const mangas = useSelector(rootState => rootState.mangas)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(setDataMangasAction(dummyData))
    
    // --- ketika gak pakai thunk
    // fetch('https://api.jikan.moe/v3/top/manga')
    //   .then(response => response.json())
    //   .then(data => {
    //     const mangas = data.top
    //     // console.log(mangas)
    //     dispatch(setDataMangasAction(mangas))
    //   })
    //   .catch(err => console.log(err))
    
    
    // fetchMangas()          // => ini akan error
    dispatch(fetchMangas())   // ini sudah implement thunk
    const loading = dispatch(getLoading())
    console.log(loading, '<<<')
  }, [])

  // if (mangas.loading) {
  //   return (
  //     <div className="container my-5">
  //       <h5 className="text-center"> Loading ...</h5>
  //     </div>
  //   )
  // }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="my-5 text-center"> Manga List </h1>

        {
          mangas?.loading
          ? <h5 className="text-center">Loading ...</h5>
          : <div>
              {/* Data Mangas: <br />
              { JSON.stringify(mangas) } */}
              <div className="mt-3 row">
                {
                  mangas?.dataMangas?.map(manga => (
                    // <Card key={manga.mal_id} {...manga} />
                    <Card key={manga.mal_id} imageUrl={manga.image_url} title={manga.title} url={manga.url} type={manga.type} />
                  ))
                }
              </div>
            </div>
        }
      </div>
    </div>
  )
}