import React, { useState } from 'react'

const FaqItem = ({ question, answer, isOpen = false }) => {
  const [expanded, setExpanded] = useState(isOpen);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`faq-item ${expanded ? 'expanded' : ''}`}>
      <div className="faq-question" onClick={toggleExpand}>
        <span>{question}</span>
        <i className={`bi ${expanded ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
      </div>
      
      {expanded && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default FaqItem