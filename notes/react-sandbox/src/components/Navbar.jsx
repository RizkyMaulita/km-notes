import React from "react"
import { Link } from "react-router-dom"

function Navbar (props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-3">
      <Link className="navbar-brand" to="/">Preloved</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/catalogs" style={{ textDecoration: 'none', color: 'inherit' }}>Catalog</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/detail/1" style={{ textDecoration: 'none' , color: 'inherit' }}>Detail</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/cart" style={{ textDecoration: 'none' , color: 'inherit' }}>Cart</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/checkout" style={{ textDecoration: 'none' , color: 'inherit' }}>Checkout</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/login" style={{ textDecoration: 'none' , color: 'inherit' }}>Login</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/register" style={{ textDecoration: 'none' , color: 'inherit' }}>Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar