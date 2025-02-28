import React from 'react'
import { Link } from 'react-router-dom'

const ContactOption = ({ title, icon, buttonText, buttonLink, iconColor }) => {
  return (
    <div className="contact-option">
      <div className="contact-icon" style={{ color: iconColor }}>
        <i className={icon}></i>
      </div>
      <div className="contact-title">{title}</div>
      <Link to={buttonLink} className="contact-button">
        {buttonText} <i className="bi bi-arrow-right"></i>
      </Link>
    </div>
  )
}

export default ContactOption