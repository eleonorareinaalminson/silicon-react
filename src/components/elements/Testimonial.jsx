import React from 'react'
import StarRating from './StarRating'

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="quote-icon">
        <i className="bi bi-quote"></i>
      </div>
      
      <StarRating rating={testimonial.starRating} />
      
      <p className="testimonial-text">{testimonial.comment}</p>
      
      <div className="user-info">
        <div className="user-avatar">
          <img src={testimonial.avatarUrl} alt={testimonial.author} />
        </div>
        <div className="user-details">
          <h4>{testimonial.author}</h4>
          <p>{testimonial.jobRole}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial