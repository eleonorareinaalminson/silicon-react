import React from 'react'

const MoneyTransfer = () => {
  return (
<section id="money-transfer-section">
                <div className="container">

                    <div className="column">
                        <div className="content">
                            <div className="section-title">
                                <h2>Make your money transfer simple and clear</h2>
                            </div>
                            <div className="section-body">
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> No monthly cash commission</li>
                                    <li><i className="bi bi-check-circle"></i> Banking transactions are free for you</li>
                                    <li><i className="bi bi-check-circle"></i> Manage payments and transactions online</li>
                                </ul>
                                <a href="#" className="btn learn-more">
                                    Learn more
                                    <i className="bi bi-arrow-right"></i>
                                </a>                            
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <img src="images/transferstatistics.svg" alt="statistics" />
                    </div>

                </div>
            </section>
  )
}

export default MoneyTransfer