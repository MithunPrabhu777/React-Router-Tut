import React, { useState } from "react";
import logo from "./assets/mithun.png";

function About() {
  const [counter, setcounter] = useState(0);
  function incrementEvent() {
    setcounter((prevcounter) => prevcounter + 1);
  }

  function decrementEvent() {
    setcounter((prevcounter) => prevcounter - 1);
  }
  return (
    <div className="about">
      <div className="container">
        <div className="content">
          <p>YOU ARE CAUGHT</p>
          <h2 className="diff">COUNTER GAME</h2>
          <h4>Tap Fast As Possible</h4>
          <h1>COUNTER</h1>
          <h1>{counter}</h1>
          <button className="increment" onClick={incrementEvent}>
            INCREMENT
          </button>
          <br />
          <button className="decrement" onClick={decrementEvent}>
            DECREMENT
          </button>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <img src={logo} alt="kill" height="120px" width="140px" />
          <h2 className="mithunh">Mithun Prabhu</h2>
          <p>
            He is DEV Expert made lots and lots of frontend projects and eagerly
            waiting for job in startup and He is curently working in Tripalive
            limited in Chennai.For any queries about DEV dream projects contact
            him.
          </p>
          <p className="contact">Contact: </p>
          <h3>9036360177</h3>
          <h3>8310070483</h3>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <h2>Projects</h2>
          <p>Bank Management System</p>
          <p>Simulation of Rules Following Car</p>
          <p>Social Media App</p>
          <p>Crowd Counting Using Machine Learning</p>
        </div>
      </div>
    </div>
  );
}

export default About;
