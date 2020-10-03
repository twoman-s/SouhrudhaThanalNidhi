import React from "react";
import "./../assets/Services.css";

function Services() {
  return (
    <div id="services" className="container mt-3">
      <div className="services-section">
        <div className="inner-width">
          <h1 className="section-title">Our Services</h1>
          <div className="border-title"></div>
          <div className="services-container">
            <div className="service-box">
              <div className="thecard">
                <div className="thefront">
                  <div className="service-icon">
                    <i className="fa fa-coins"></i>
                  </div>
                  <div className="service-title">Gold Loan</div>
                  <div className="service-desc">
                    The best gold loan schemes with lowest interest.
                  </div>
                </div>
                <div className="theback">
                  <div className="service-title back">Gold Loan</div>
                  <div className="service-desc back">
                    <ul className="list">
                      <li>Interest rate : 8.5%*</li>
                      <li>Simplified documentations</li>
                    </ul>
                    <h6>*Conditions Apply </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-box">
              <div className="thecard">
                <div className="thefront">
                  <div className="service-icon">
                    <i className="fa fa-building"></i>
                  </div>
                  <div className="service-title">Property Loan</div>
                  <div className="service-desc">
                    Get more with our low interest property loan schemes
                  </div>
                </div>
                <div className="theback">
                  <div className="service-title back">Property Loan</div>
                  <div className="service-desc back">
                    <ul className="list">
                      <li>Lowest interest rates</li>
                      <li>Simplified documentations</li>
                    </ul>
                    <h6>*Conditions Apply </h6>                                      
                  </div>
                </div>
              </div>
            </div>
            <div className="service-box">
              <div className="thecard">
                <div className="thefront">
                  <div className="service-icon">
                    <i className="fa fa-rupee-sign"></i>
                  </div>
                  <div className="service-title">Fixed Deposits</div>
                  <div className="service-desc">
                    Get more with our various Fixed Deposit schemes.
                  </div>
                </div>
                <div className="theback">
                  <div className="service-title back">Fixed Deposits</div>
                  <div className="service-desc back">
                    <ul className="list">
                      <li>Interest rate : 12.5%*</li>
                      <li>Simplified documentations</li>
                    </ul>
                    <h6>*Conditions Apply </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-box">
              <div className="thecard">
                <div className="thefront">
                  <div className="service-icon">
                    <i className="fa fa-piggy-bank"></i>
                  </div>
                  <div className="service-title">Savings Deposits</div>
                  <div className="service-desc">
                    Higher interest rate savings scheme
                  </div>
                </div>
                <div className="theback">
                  <div className="service-title back">Savings Deposits</div>
                  <div className="service-desc back">
                  <ul className="list">
                      <li>Higher interest rates</li>
                      <li>Simplified documentations</li>
                    </ul>
                    <h6>*Conditions Apply </h6> 
                  </div>
                </div>
              </div>
            </div>
            <div className="service-box">
              <div className="thecard">
                <div className="thefront">
                  <div className="service-icon">
                    <i className="fa fa-coins"></i>
                    <i className="fa fa-coins"></i>
                  </div>
                  <div className="service-title">Recurring Deposits</div>
                  <div className="service-desc">
                  Earn more interest at regular intervals
                  </div>
                </div>
                <div className="theback">
                  <div className="service-title back">Recurring Deposits</div>
                  <div className="service-desc back">
                  <ul className="list">
                      <li>Higher interest rates</li>
                      <li>Simplified documentations</li>
                    </ul>
                    <h6>*Conditions Apply </h6> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6 className="ending">Please contact branch for more details</h6>
        </div>
      </div>
    </div>
  );
}

export default Services;
