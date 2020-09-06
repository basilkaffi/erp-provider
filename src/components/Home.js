import React from "react";
import { Navbar } from "../components";
import { useHistory } from "react-router-dom";
import graph from "../assets/graph.svg";

function Home() {
  const history = useHistory();
  const gotoRegister = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <section className="home" id="home">
      <span className="visibility">
        <Navbar fixed={false} />
        <div className="divider">
          <div className="description">
            <div className="content">
              <h2>Having Trouble With Your Bussines Resource Management?</h2>
              <p>
                Our Service Give You The Solution. Our Servie Provide You
                Distribution Record, Profit Calculation, Chart Analysis, 7x24
                Hours Support, Export Data to Excel, and Income Prediction using
                Artificial Intelligence.
              </p>
              <div className="button" onClick={gotoRegister}>
                SIGN UP
              </div>
            </div>
          </div>
          <div className="image-container">
            <div className="content">
              <img src={graph} alt="graph illustration"></img>
              {/* <img src={person} alt="person illustration"></img> */}
            </div>
          </div>
        </div>
      </span>
    </section>
  );
}

export default Home;
