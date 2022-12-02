import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Products from "../../components/ProductCard/Products";

const Smoothies = () => (
  <Fragment>
    <div style = {{fontSize: 16}}>
      <Link to={`/menu`}>Categories</Link> / Smoothies
    </div>
    <div>
      <Products />
    </div>
  </Fragment>
);

export default Smoothies;
