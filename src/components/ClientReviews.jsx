import React from 'react'

const ClientReviews = () => {

  const testimonials = [
    {
      id: 1,
      comment: "Sit pretium urna quis tempor, sed dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas justo, egestas justo aliquam vel. Nunc lectus nec hendrerit viverra justo turpis sit amet.",
      name: "Fannie Summers",
      title: "Designer",
      image: "images/testimonials/person1.svg",
      rating: 4
    },
    {
      id: 2,
      comment: "Nunc tincidunt leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisi bibendum nulla molestie eu enim ornare dictumst et amet. Dictum pretium dolor tincidunt egestas nget nunc.",
      name: "Albert Flores",
      title: "Developer",
      image: "images/testimonials/person2.svg",
      rating: 5
    }
  ];

  return (
    <section id="client-reviews-section">
      <div className="container">
        <div className="reviews-grid">
          <div className="section-title">
            <h2>Clients are<br />Loving Our App</h2>
          </div>
          
          <div className="testimonials-container">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="quote-icon">
                  <i className="bi bi-quote"></i>
                </div>
                
                <div className="rating">
                  {[...Array(5)].map((_, index) => (
                    <i 
                      key={index} 
                      className={index < testimonial.rating ? "bi bi-star-fill" : "bi bi-star"}
                    ></i>
                  ))}
                </div>
                
                <p className="testimonial-text">{testimonial.comment}</p>
                
                <div className="user-info">
                  <div className="user-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="user-details">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientReviews