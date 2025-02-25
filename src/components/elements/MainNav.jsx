import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNav = () => {
  return (
    <div>
        <nav className="main-nav">
            <NavLink to="/features" className="navigation-link">Features</NavLink>
            <NavLink to="/contact" className="navigation-link">Contact</NavLink>
        </nav>
    </div>
  )
}

export default MainNav