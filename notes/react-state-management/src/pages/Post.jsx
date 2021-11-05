import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"

export default function PostPage (props) {
  const [ dataPosts, setDataPosts ] = useState([])
  const [ form, setForm ] = useState({
    title: '',
    author: ''
  })

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(data => {
        setDataPosts(data)
      })
      .catch(err => console.log(err))
  }

  const handleChangeTitle = (value) => {
    setForm({
      ...form,
      title: value
    })
  }

  const handleChangeAuthor = (value) => {
    setForm({
      ...form,
      author: value
    })
  }

  const handleClick = () => {
    const data = form
    console.log(data)
    fetch('http://localhost:3001/posts', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      getData()
      setForm({
        title: '',
        author: ''
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return(
    <div>
      <Navbar />
      <div className="container">
        <h1 className="my-5 text-center">Post Page</h1>

        <div className="mb-5">
          <h3 className="text-center mb-3">List Post</h3>
          {
            dataPosts.map((post, index) => {
              return <div key={index}>{JSON.stringify(post)}</div>
            })
          }
        </div>
        <div>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" placeholder="input title" value={form.title} onChange={e => handleChangeTitle(e.target?.value)}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input type="text" className="form-control" placeholder="input author" value={form.author} onChange={e => handleChangeAuthor(e.target?.value)}/>
          </div>
          <div>
            <button className="btn btn-success" onClick={() => handleClick()}>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}