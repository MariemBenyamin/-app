
import React from 'react'
import { NavLink } from 'react-router' 

function Navbar() {
  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* Logo Start */}
                <NavLink to="/" className="logo">
                  <h1>Villa</h1>
                </NavLink>

                {/* Menu Start */}
                <ul className="nav">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/properties">Properties</NavLink></li>
                  <li><NavLink to="/details">Property Details</NavLink></li>
                  <li><NavLink to="/contact">Contact Us</NavLink></li>
                  <li><NavLink to="/product">Products</NavLink></li>
                  <li><NavLink to="/shop">Shop</NavLink></li>

                  {/* Dropdown */}
                  <li className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="menu-btn dropdown-toggle text-white"
                      role="button"
                      data-bs-toggle="dropdown"  
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-cart-shopping"></i> Buy & Rent 
                    </NavLink>
                    <div className="dropdown-menu">
                      <NavLink to="/payment" className="dropdown-item">Payment</NavLink>
                      <NavLink to="/success" className="dropdown-item">Success</NavLink>
                    </div>
                  </li>
                  
                </ul>

                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
