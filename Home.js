import React from "react";
import "./App.css";
//import image from "./assets/home.jpg";
import { LoremIpsum } from "react-lorem-ipsum";

function Home() {
  return (
    <div className="master">
      <div className="homecard1">
        <div className="sliderText">
          <h3>Codester</h3>
        </div>
        <div className="homecontent">
          <p>Cool Stuff Inside</p>
          <br />
          <p>Awesome Pexels</p>
          <br />
          <p>About is Par</p>
          <br />
          <p>Shopping Demo</p>
          <br />
          <p>Contact Me</p>
          <br />
          <p>Fill Form Brotha</p>
          <br />
        </div>
      </div>
      <div className="homecard1">
        <div className="sliderText">
          <h3>Roadster</h3>
        </div>
        <div className="homecontent">
          <LoremIpsum p={1} />
        </div>
      </div>
      <div className="homecard1">
        <div className="sliderText">
          <h3>Monster</h3>
        </div>
        <div className="homecontent">
          <LoremIpsum p={1} />
        </div>
      </div>
    </div>
  );
}

export default Home;
