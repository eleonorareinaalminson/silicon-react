import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
         <div className="container">

            <div className="headline">
            <h1>Manage All Your <br /> Money in One App</h1>
            </div>

            <div className="content">
            <p>We offer you a new generation of the mobile banking. <br /> Save, spend & manage money in your pocket.</p>
            
            <div className="app-downloads">
                <a href="#" className="btn-downloadapp">
                <div className="button-content">
                    <i className="bi bi-apple"></i>
                    <div>
                    <div className="description">Download on the</div>
                    <div className="name">App Store</div>
                    </div>
                </div>
                </a>
                
                <a href="#" className="btn-downloadapp">
                <div className="button-content">
                    <i className="bi bi-google-play"></i>
                    <div>
                    <div className="description">GET IT ON</div>
                    <div className="name">Google Play</div>
                    </div>
                </div>
                </a>
            </div>

            <div className="discover-more">
                <i className="bi bi-chevron-down"></i>
                Discover more
            </div>
            </div>
            
            <div className="image">
            <img src="/images/hero-image.svg" alt="Banking app illustration" />
            </div>

      </div>
    </section>
  )
}

export default Hero