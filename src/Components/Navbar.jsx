import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <NavLink to="/" className="logo">
                  <h1>Villa</h1>
                </NavLink>

                <ul className={`nav ${menuOpen ? 'active' : ''}`}>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/properties">Properties</NavLink></li>
                  <li><NavLink to="/details">Property Details</NavLink></li>
                  <li><NavLink to="/contact">Contact Us</NavLink></li>
                  <li><NavLink to="/product">Products</NavLink></li>
                  <li><NavLink to="/shop">Shop</NavLink></li>
                  <li className='cart'><NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i> Buy & Rent</NavLink></li>
                  <li><NavLink to="/payment">Payment</NavLink></li>
                
                </ul>

                <a className="menu-trigger" onClick={toggleMenu}>
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
