import React from 'react'

const HowDoesItWork = () => {
  return (

    <section id="how-does-it-work-section">
    <div className="section-title">
        <h2>How Does It Work?</h2>
    </div>
 
    <div className="image-slider">
        <div className="image-slide">
            <img src="images/imageslider/phone1.svg" alt="Budget Overview" />
        </div>
        <div className="image-slide">
            <img src="images/imageslider/phone2.svg" alt="Card Management" />
        </div>
        <div className="image-slide">
            <img src="images/imageslider/phone3.svg" alt="Transfer Interface" />
        </div>
    </div>
 
    <div className="section-body">
        <h3>Latest transaction history</h3>
        <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
    </div>
 </section>  )
}

export default HowDoesItWork