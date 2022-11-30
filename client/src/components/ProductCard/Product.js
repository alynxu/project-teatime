import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { message } from "antd";
import { Col } from "reactstrap";
import { Button } from "reactstrap";
import { FaRegHeart } from "react-icons/fa";
import { NavLink as RouterNavLink } from "react-router-dom";
import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

function Product({ product, addToCart }) {
  const { user } = useAuth0();

  const addToCartHandler = () => {
    if (!user) {
      message.error("Please login to add to cart");
      return;
    }
    addToCart(product.id);
  };

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
          <img
            width="200px"
            height="280px"
            src={product.imageUrl}
            alt={`${product.name}`}
          />
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
            onClick={addToCartHandler}
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
