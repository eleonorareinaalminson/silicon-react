import React from 'react'

const AppFeatures = () => {
    return (
      <section id="app-features-section">
        <div className="container">
          <div className="app-features-grid">
             <div className="phone-container">
                <div className="phone-card-overlay">
                    <img className="phone-image" src="images/app-screen.svg" alt="App Interface" />
                    <img className="card-image" src="images/creditcard.svg" alt="Credit Card" />
                </div>
                </div>

             <div className="features-container"> 
                <div className="section-title">
                   <h2>App Features</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est.</p>
                </div>

                <div className="features">
                        <div className="feature">
                            <div className="feature-icon">
                                <img src="images/icons/payment-icon.svg" alt="Easy Payments" />
                            </div>
                            <div className="feature-body">
                                <h3>Easy Payments</h3>
                                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                                <img src="images/icons/shield-icon.svg" alt="Data Security" />
                            </div>
                            <div className="feature-body">
                                <h3>Data Security</h3>
                                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                                <img src="images/icons/stats-icon.svg" alt="Cost Statistics" />
                            </div>
                            <div className="feature-body">
                                <h3>Cost Statistics</h3>
                                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nhh.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                                <img src="images/icons/support-icon.svg" alt="Support 24/7" />
                            </div>
                            <div className="feature-body">
                                <h3>Support 24/7</h3>
                                <p>A elementum, imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                                <img src="images/icons/cashback-icon.svg" alt="Regular Cashback" />
                            </div>
                            <div className="feature-body">
                                <h3>Regular Cashback</h3>
                                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                              <img src="images/icons/standards-icon.svg" alt="Top Standards" />
                                </div>
                            <div className="feature-body">
                                <h3>Top Standards</h3>
                                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    )
    }

export default AppFeatures