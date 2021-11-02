import React from "react"
import { Link } from "react-router-dom"

function Navbar (props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-3">
      <Link className="navbar-brand" to="/">Anime</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/favorites" style={{ textDecoration: 'none', color: 'inherit' }}>Favorite</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/mangas" style={{ textDecoration: 'none' , color: 'inherit' }}>Manga</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar