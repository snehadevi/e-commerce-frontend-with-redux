import React from "react";
import Navigation from "../Components/Navigation";
function NotFound({ history }) {
  return (
    <div>
      <h1 className="mt-20 text-xl text-bold">NotFound</h1>
      <p
        className="text-purple-600 cursor-pointer"
        onClick={() => history.push("/")}
      >
        return to home
      </p>
    </div>
  );
}

export default NotFound;
