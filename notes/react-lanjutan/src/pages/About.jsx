import React from 'react'
import { useHistory } from "react-router-dom";
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux'

function AboutPage () {
  let history = useHistory()
  const store = useSelector(state => state)

  console.log(store, '<<< di about')
  console.log(history, '<<< history di about page')

  return (
    <div>
      <Navbar/>
      <div className="text-center my-5">
        About Page

        <div className="my-5">
          <button className="btn btn-success" onClick={() => history.push('/profile')}>
            Go Profile Page
          </button>
        </div>

      </div>
    </div>
  )
}

export default AboutPage