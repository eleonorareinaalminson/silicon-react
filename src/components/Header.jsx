import React from 'react'
import Logotype from './elements/Logotype'
import MainNav from './elements/MainNav'
import ToggleSwitch from './elements/ToggleSwitch'
import { useContext } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'
import LinkButton from './elements/LinkButton'

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <header id="header">
      <div className="container">

        <Logotype />
        <MainNav />
        <ToggleSwitch 
          id="theme-switch" 
          text="Dark Mode" 
          currentState={darkMode} 
          currentStateCallback={toggleDarkMode} 
        />
        
        <button className="account-link">
          <LinkButton to="signin" text="Sign in / up" color="purple" icon="bi bi-person" />
        </button>

        <button className="menu-button">
          <i className="bi bi-list"></i>
        </button>


        </div>
    </header>
  )
}

export default Header