import React from "react";
import "./css/tailwind.css";

import Routing from "./Routing";
import { useDispatch } from "react-redux";
import { getProducts } from "./Redux/store";

function App() {
  const dispatch = useDispatch();
  dispatch(getProducts());
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
