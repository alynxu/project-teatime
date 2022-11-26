import React, { Fragment } from "react";
import Products from "../../components/ProductCard/Products"

const Coffee = () => (

  <Fragment>
    <div>
        <a href={`/menu`}>Categories</a> / Coffee
    </div>
    <div>
      <Products />
    </div>
  </Fragment>
);

export default Coffee;
