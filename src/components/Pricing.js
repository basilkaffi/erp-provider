import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pricing() {
  const cardComponent = (title, price, activeFeature) => {
    const features = [
      "Record Incoming Good",
      "noted goods out",
      "Profit Calculation",
      "Chart Analysis",
      "7x24 Hours Support",
      "Export Data to Excel",
      "Income Prediction using Artificial Intelligence",
    ];
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <h5>{title}</h5>
          </Card.Title>
          <h6 class="card-price">
            {price}
            <span class="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {features.map((feature, idx) => {
              return idx < activeFeature ? (
                <li>
                  <span className="fa-li">
                    <FontAwesomeIcon icon={["fas", "check"]} />
                  </span>
                  {feature}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <FontAwesomeIcon icon={["fas", "times"]} />
                  </span>
                  {feature}
                </li>
              );
            })}
          </ul>
          <div className="button">SUBSCRIBE</div>
        </Card.Body>
      </Card>
    );
  };
  return (
    <section className="pricing" id="pricing">
      <div className="content-container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Multiple Pricing Options</h2>
            <p className="lead w-75 mx-auto">
              We've prepared pricing plans for all budgets so you can get
              started right away. They're great for small companies and large
              organizations.
            </p>
          </div>
        </div>
        <div className="divider">
          {cardComponent("Basic", "Rp. 800.000,00", 3)}
          {cardComponent("Business", "Rp. 1.200.000,00", 5)}
          {cardComponent("Enterpreneur", "Rp. 1.500.000,00", 7)}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
