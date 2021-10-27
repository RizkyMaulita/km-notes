import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'

function ProfilePage () {
  const [ name, setName ] = useState('')
  const [ status, setStatus ] = useState('')
  const store = useSelector(state => state) // return sebuah object {}

  console.log(store, '<<< di profile')

  useEffect(function () {
    setTimeout(() => {
      setName('litha')
    }, 3000)
  }, []) // kalau dependencies kosong, maka useEffect nya seperti componentDidMount

  // useEffect(() => {
  //   setTimeout(() => {
  //     setStatus('Nama sudah berubah menjadi ' + name)
  //   }, 4000)
  // }, [name])

  return (
    <div>
      <Navbar />
      <div className="text-center my-5">
        Profile Page

        <div className="mt-3">
          Name : {name}
        </div>

        <div className="mt-3">
          Status : {status}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage