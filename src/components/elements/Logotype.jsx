import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../contexts/DarkModeContext'

const Logotype = () => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <Link to="/" className="logotype">

        <img src={ darkMode ? "/images/logotype2.svg" : "/images/logotype1.svg" } alt="Silicon Inc." />

    </Link>
  )
}

export default Logotype