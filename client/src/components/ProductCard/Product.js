import { Col } from "reactstrap";
import { Button } from "reactstrap";
import { FaRegHeart } from "react-icons/fa";
import { NavLink as RouterNavLink } from "react-router-dom";
import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import React from "react";

function Product({product, addToCart}) {
  return (
    <>
        <Col>
          <NavLink
            tag={RouterNavLink}
            to={`/products/${product.id}`}
            activeClassName="selected"
            style={{
              padding: 0,
            }}
          >
            <img width="200px" height="280px" src={product.imageUrl} alt={`${product.name}`} />
          </NavLink>
          <h3>{product.name}</h3>
          <div>
            <h5>
              ${product.price} <FaRegHeart />
            </h5>
          </div>
          <Button
            color="primary"
            className="btn-margin"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart
          </Button>
        </Col>
    
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
      
    };
  };
export default connect(null, mapDispatchToProps)(Product);
