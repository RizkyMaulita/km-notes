import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
// import { changeStatus } from '../store/actions/manga'

function HomePage () {
  const store = useSelector(state => state)
  const dispatch = useDispatch()

  console.log(store, '<<< di home')
  useEffect(() => {
    dispatch({ type: 'manga/setStatus' })
    // dispatch(changeStatus()) // pemanggilan dispatch harus berupa object dan harus ada key 'type'
    dispatch({ type: 'manga/setTotalData', payload: 100 })
  }, [])

  return (
    <div>
      <Navbar />
      <div className="text-center my-5">
        Home Page
      </div>
    </div>
  )
}

export default HomePage