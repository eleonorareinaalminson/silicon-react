import React from 'react'

const Subscribe = () => {
  return (

    <section id="subscribe-section">
    <div className ="container">

        <div className="content-container">
            <img src="images/icons/notification-bell.svg" alt="Notification Bell" />
            <h2>
                 Subscribe to our newsletter
                 <span>to stay informed about our latest updates</span>
            </h2>
        </div>

        <div className="form-container">
            <form id="subscribe-form" noValidate>

                <div className="subscribe-email">
                     <i className="bi bi-envelope"></i>
                     <input type="email" id="email" name="email" placeholder="Your email" />
                </div>

                <button type="submit" className="btn">Subscribe</button>
            </form>
        </div>
    </div>
</section>
)
}

export default Subscribe