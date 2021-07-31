import "./style.css";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import CheckoutThankyou from "./pages/CheckoutThankyou";
import CheckoutPay from "./pages/CheckoutPay";

function App() {
  return (
    <div className="scrollbar">
      <Router>
        <Switch>
          <Route path="/pay/:id">
            <CheckoutPay />
          </Route>
          <Route path="/checkout/:id">
            <CheckoutThankyou />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
