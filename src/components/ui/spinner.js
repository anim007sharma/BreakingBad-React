import React from "react";
import Spinner from "../../img/spinner.gif";

const spinner = () => {
  return (
    <img
      src={Spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading"
    />
  );
};

export default spinner;
