import { Route, Switch, Redirect } from "react-router";
import React from "react";
import Shop from "./Components/Shop";
import CheckOut from "./Pages/CheckOut";
import Contact from "./Pages/Contact";
import Success from "./Pages/Success";
import { useContext } from "react";
import { Context } from "./Context API/GlobalContext";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";
import "../src/css/tailwind.css";

function Routing() {
  const { selectedProducts } = useContext(Context);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/checkout/Success" component={Success} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Blog" component={Blog} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default Routing;
