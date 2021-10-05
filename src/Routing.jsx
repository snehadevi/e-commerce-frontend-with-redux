import { Route, Switch, Redirect } from "react-router";
import React from "react";
import Shop from "./Components/Shop";
import CheckOut from "./Pages/CheckOut";
import Contact from "./Pages/Contact";
import Success from "./Pages/Success";
import NotFound from "./Pages/NotFound";
import "../src/css/tailwind.css";
import About from "./Pages/About";

function Routing() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/checkout/Success" component={Success} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default Routing;
