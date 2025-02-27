import React, { useContext, useState, useEffect } from 'react'
import { TestimonialsContext } from '../contexts/TestimonialsContext'
import Testimonial from './elements/Testimonial'

const ClientReviews = () => {
  const { testimonials } = useContext(TestimonialsContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // När testimonials är laddade, avsluta laddningstillståndet
    if (testimonials && testimonials.length > 0) {
      setLoading(false);
    }
  }, [testimonials]);

  if (loading) {
    return (
      <section id="client-reviews-section">
        <div className="container">
          <div className="loading-testimonials">
            <p>Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="client-reviews-section">
        <div className="container">
          <div className="error-testimonials">
            <p>Failed to load testimonials: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="client-reviews-section">
      <div className="container">
        <div className="reviews-grid">
          <div className="section-title">
            <h2>Clients are<br />Loving Our App</h2>
          </div>
          
          <div className="testimonials-container">
            {testimonials.slice(0, 2).map((testimonial) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientReviews