import React from "react";
import "./App.css";
import "./css/tailwind.css";
import GlobalContext from "./Context API/GlobalContext";
import Routing from "./Routing";

function App() {
  return (
    <GlobalContext>
      <div className="App">
        <Routing />
      </div>
    </GlobalContext>
  );
}

export default App;
