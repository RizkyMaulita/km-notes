import React, { useState } from "react";
import { BASEURL } from "../config/api";
import { useHistory } from "react-router";

export default function RegisterPage (props) {
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  })
  const history = useHistory()

  const register = () => {
    const payload = form
    if (form?.email && form?.password && form?.phone && form?.name) {
      fetch(`${BASEURL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(res => {
        if (res.status === 201) { // kalau method post, maka status === 201, selain itu 200
          return res.json()
        } else {
          return new Error('Failed to register')
        }
      })
      .then(data => {
        console.log(data)
        localStorage.setItem('dataLogin', JSON.stringify(data))
        // history.push('/')
        history.goBack()
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  return (
    <div className="container">
    <h1 className="my-5 text-center">Register Page</h1>

    <div className="mx-5 px-5">
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" value={form?.name} onChange={e => setForm({ ...form, name: e.target?.value })} />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" value={form?.email} onChange={e => setForm({ ...form, email: e.target?.value })} />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" value={form?.password} onChange={e => setForm({ ...form, password: e.target?.value })}/>
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">phone</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" value={form?.phone} onChange={e => setForm({ ...form, phone: e.target?.value })} />
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-end">
        <button className="btn btn-primary" onClick={() => register()}>Sign Up</button>
      </div>
    </div>    
  </div>
  )
}