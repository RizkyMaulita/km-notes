import React, {useState} from "react";
import { useHistory } from "react-router";

export default function LoginPage (props) {
  const [ form, setForm ] = useState({
    userName: '',
    password: ''
  })
  const history = useHistory()

  const onLogin = () => {
    console.log(form)
    console.log(history)
    if (form?.userName && form?.password) {
      // hit endpoint GET /users, 
      // check data nya kalau misalkan email dan pass nya sama, baru success kalau gak kasih error
      localStorage.setItem('dataLogin', JSON.stringify(form))
      history.goBack()  // ketika dia berhasil login, maka harus back ke path / history sebelumnya
    }
  }

  return (
    <div className="container">
      <h1 className="my-5 text-center">Login Page</h1>

      <div className="mx-5 px-5">
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={form?.userName} onChange={e => setForm({ ...form, userName: e.target?.value })} />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" value={form?.password} onChange={e => setForm({ ...form, password: e.target?.value })}/>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-end">
          <button className="btn btn-primary" onClick={() => onLogin()}>Sign In</button>
        </div>
      </div>
    </div>
  )
}