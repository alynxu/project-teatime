import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { message } from "antd";
import { Col } from "reactstrap";
import { BsCartPlus } from "react-icons/bs";
import { NavLink as RouterNavLink } from "react-router-dom";
import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import {
  addToCart,
  addToFavorite,
  removeFromFavorite,
} from "../../redux/Shopping/shopping-actions";
import { HeartFilled } from "@ant-design/icons";
import Fab from "@mui/material/Fab";

const IconButton = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 1.5rem;
  color: #ff5b2e;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FavoriteButton = styled.div`
  position: absolute;
  top: 0;
  right: -16px;
  padding: 0.5rem;
  z-index: 10;
`;

function Product({
  product,
  addToCart,
  favoriteItems,
  addToFavorite,
  removeFromFavorite,
}) {
  const { user } = useAuth0();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    favoriteItems.forEach((item) => {
      if (item.id === product.id) {
        setIsFavorite(true);
      }
    });
  }, [favoriteItems, product.id]);

  const addToCartHandler = () => {
    if (!user) {
      message.error("Please login to add to cart");
      return;
    }
    message.success("Item is added to the cart!");
    addToCart(product.id);
  };

  const favoriteHandler = () => {
    if (!user) {
      message.error("Please login to add favorite product!");
      return;
    }
    if (isFavorite) {
      setIsFavorite(false);
      removeFromFavorite(product.id);
    } else {
      setIsFavorite(true);
      addToFavorite(product.id);
    }
  };

  return (
    <>
      <Col style={{display:"flex", flexDirection: "column", margin: "20px 80px 20px 20px", maxWidth: "200px" }}>
        <NavLink
          tag={RouterNavLink}
          to={`/products/${product.id}`}
          activeClassName="selected"
        >
          <img
            width="200px"
            height="280px"
            src={product.imageUrl}
            alt={`${product.name}`}
          />
        </NavLink>
        <FavoriteButton onClick={favoriteHandler}>
          <Fab size="medium">
            <IconButton>
              {!isFavorite && <HeartFilled style={{ color: "#9FA0A4" }} />}
              {isFavorite && <HeartFilled style={{ color: "#FF2E67" }} />}
            </IconButton>
          </Fab>
        </FavoriteButton>
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

const mapStateToProps = (state) => {
  return {
    favoriteItems: state.shop.favoriteItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    addToFavorite: (id) => dispatch(addToFavorite(id)),
    removeFromFavorite: (id) => dispatch(removeFromFavorite(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
