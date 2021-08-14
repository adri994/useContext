import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link className="nav-link" to="/login">Login</Link> */}

            {/* Sirve para poner un estilado distinto */}

            <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
            <NavLink exact activeClassName="active" to="/about" className="nav-link">About</NavLink>
            <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
