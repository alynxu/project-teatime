import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Products from "../../components/ProductCard/Products";

const Coffee = () => (
  <Fragment>
    <div>
      <Link to={`/menu`}>Categories</Link> / Coffee
    </div>
    <div>
      <Products />
    </div>
  </Fragment>
);

export default Coffee;