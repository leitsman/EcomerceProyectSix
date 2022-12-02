import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="loader flexColumn">
      <Spinner animation="grow" variant="dark" />
      loading...
    </div>
  );
};

export default Loader;
