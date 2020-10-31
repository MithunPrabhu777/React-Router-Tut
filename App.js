import React from "react";
import Shop from "./Shop";
import About from "./About";
import Nav from "./Nav";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const Home = () => {
    return <h1>Home Page</h1>;
  };
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
