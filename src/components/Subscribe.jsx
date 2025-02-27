import React from 'react'
import SubscribeForm from './forms/SubscribeForm'

const Subscribe = () => {
  return (
    <section id="subscribe-section">
      <div className="container">
        <div className="content-container">
          <img src="images/icons/notification-bell.svg" alt="Notification Bell" />
          <h2>
            Subscribe to our newsletter
            <span>to stay informed about our latest updates</span>
          </h2>
        </div>

        <div className="form-container">
          <SubscribeForm />
        </div>
      </div>
    </section>
  )
}

export default Subscribe