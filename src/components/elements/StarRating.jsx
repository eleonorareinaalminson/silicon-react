import React from 'react'

const StarRating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <i 
          key={index} 
          className={index < rating ? "bi bi-star-fill" : "bi bi-star"}
        ></i>
      ))}
    </div>
  )
}

export default StarRating