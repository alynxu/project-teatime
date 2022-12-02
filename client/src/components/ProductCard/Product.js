import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { message } from "antd";
import { Col } from "reactstrap";
import { BsCartPlus } from "react-icons/bs";
import { NavLink as RouterNavLink } from "react-router-dom";
import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const IconButton = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 1.5rem;
  color: #FF5B2E;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
      <Col style={{ margin: "10px" }}>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            justifyContent: "space-between",
            width: "200px",
          }}
        >
          <h5 style={{ margin: 0 }}>${product.price}</h5>
          <IconButton onClick={addToCartHandler}>
            <BsCartPlus />
          </IconButton>
        </div>
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
