import React, { useEffect } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import { useSelector, useDispatch } from "react-redux"
import { setDataAnimesAction, SETDATAANIMES_TYPE } from "../store/actions/anime"
import dummyData from '../assets/data/anime.json'

export default function Home (props) {
  const dispatch = useDispatch()
  const store = useSelector(rootState => rootState)
  const animeStore = useSelector(rootState => rootState?.animes)
  
  useEffect(() => {
    setTimeout(() => {
      // dispatch({ type: 'anime/setDataAnimes' }) 
      // dispatch({ type: SETDATAANIMES_TYPE, payload: [dummyData] })
      dispatch(setDataAnimesAction([dummyData]))
    }, 2000)
    /*
      Aturan pemanggilan dispatch :
        1. parameter tidak boleh kosong
        2. parameter harus berupa object
        3. parameter minimal harus punya key / properties yang bernama "type"
    */
  }, [])

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center my-5"> Anime List </h1>
        {/* {JSON.stringify(dummyData)} */}
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {
              JSON.stringify(store)
            }
            {/* <Card imageUrl={dummyData.imageUrl} title={dummyData.title} url={dummyData.url} type={dummyData.type} />
            <Card {...dummyData} /> */}
          </div>
          <div className="my-5">
            { JSON.stringify(animeStore)}
          </div>
        </div>
      </div>
    </div>
  )
}