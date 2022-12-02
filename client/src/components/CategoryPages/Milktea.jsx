import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Products from "../../components/ProductCard/Products";

const Milktea = () => (
  <Fragment>
    <div style = {{fontSize: 16}}>
      <Link to={`/menu`}>Categories</Link> / Milktea
    </div>
    <div>
      <Products />
    </div>
  </Fragment>
);

export default Milktea;