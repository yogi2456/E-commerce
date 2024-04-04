import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light py-3 shadow-sm bg-white">
  <div class="container">
    <NavLink class="navbar-brand fw-bold fs-4" to="/">
        LA COLLECTION
        </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/products">Products</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="buttons">
        <NavLink to="/login" className="btn btn-outline-dark">
        <i className="fa fa-sign-in me-1"> Login</i>
        </NavLink>
        <NavLink to="/register" className="btn btn-outline-dark ms-2">
        <i className="fa fa-user-plus me-1"> Register</i>
        </NavLink>
        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
        <i className="fa fa-shopping-cart me-1"> Cart (0)</i>
        </NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

