import React from 'react'

const ToggleSwitch = ({ id, text, currentState, currentStateCallback }) => {  
  return (
    <div className="toggle-switch">
      {text && <span className="switch-label" aria-hidden="true">{text}</span>}
      <label className="switch">
        <input 
          id={id} 
          type="checkbox" 
          checked={currentState} 
          onChange={currentStateCallback} 
        />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default ToggleSwitch