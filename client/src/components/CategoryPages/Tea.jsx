import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Products from "../../components/ProductCard/Products";

const Tea = () => (
  <Fragment>
    <div>
      <Link to={`/menu`}>Categories</Link> /Tea
    </div>
    <div>
      <Products />
    </div>
  </Fragment>
);

export default Tea;
