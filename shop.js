import React from "react";
import "./App.css";
import laptop from "./assets/laptop.jpg";
import tv from "./assets/tv.jpg";
import armchair from "./assets/armchair.jpg";
import iphone from "./assets/iphone.jpg";
import headphone from "./assets/headphone.jpg";
import washing from "./assets/washing.jpg";

function Shop() {
  return (
    <div className="shop">
      <div className="contains">
        <div className="shop1">
          <img src={laptop} alt="Hello" height="150px" width="150px"></img>
          <br />
          <br />
          <h2>Laptop</h2>
          <h3>COOL HP LAPTOPS</h3>
          <p>$550</p>
        </div>
        <div className="shop2">
          <img src={tv} alt="Hello" height="150px" width="150px"></img>
          <br />
          <br />
          <h2>TV</h2>
          <h3>COOL PHILIPS TELEVISION</h3>
          <p>$750</p>
        </div>
        <div className="shop3">
          <img src={armchair} alt="Hello" height="150px" width="150px"></img>
          <br />
          <br />
          <h2>Armchair</h2>
          <h3>COOL ARMCHAIRS</h3>
          <p>$70</p>
        </div>
        <div className="shop4">
          <img src={iphone} alt="Hello" height="150px" width="150px"></img>
          <br />
          <br />
          <h2>Smart Phone</h2>
          <h3>COOL IPHONE</h3>
          <p>$700</p>
        </div>
        <div className="shop5">
          <img src={headphone} alt="Hello" height="150px" width="150px"></img>
          <br />
          <br />
          <h2>Headphone</h2>
          <h3>COOL HEADPHONES</h3>
          <p>$100</p>
        </div>
        <div className="shop6">
          <img src={washing} alt="Hello" height="150px" width="150px"></img>
          <br />
          <br />
          <h2>Washing Machine</h2>
          <h3>BRAND NEW WASHING MACHINE</h3>
          <p>$280</p>
        </div>
      </div>
    </div>
  );
}

export default Shop;
