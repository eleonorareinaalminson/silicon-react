import React from 'react'

const ReceivePayment = () => {
  return (
    <section id="receive-payment-section">
        <div className="container">
            <div className="image-container">
                <img className="contactlist-image" src="images/contact-1st.svg" alt="Contact" />
                <img className="creditcard-image" src="images/creditcard.svg" alt="Credit Card" />
            </div>
            <div className="content-container">
                <h2>Receive payment from international bank details</h2>
                <div className="features">
                    <div className="feature">
                        <div className="feature-icon">
                            <img src="images/icons/creditcard-icon.svg" alt="Feature Icon 1" />
                        </div>
                        <div className="feature-body">
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">
                            <img src="images/icons/wallet-icon.svg" alt="Feature Icon 2" />
                        </div>
                        <div className="feature-body">
                        <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                        </div>
                    </div>
                </div> 
                <a href ="#" className="btn">Learn more <i className="bi bi-arrow-right"></i></a> 
            </div>
        </div>
    </section>
    )
}

export default ReceivePayment