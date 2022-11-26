import React from "react";
import Searchbar from "../Searchbar/Searchbar"
import {Button} from "reactstrap";

const Maincontent = () => (
  <div className="text-center hero my-5">
    <h1 className="mb-4">Enjoy the teatime</h1>
    <h1 className="mb-4">Enjoy your life</h1>

    <p className="lead">
    <Searchbar />
    <Button
      color="primary"
      className="btn-margin">
      Order Now!
    </Button>
    </p>
  </div>
);

export default Maincontent;
