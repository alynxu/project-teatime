import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import "../CartPage/ShoppingCart.scss";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { connect } from "react-redux";

import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import ShoppingTable from "./ShoppingTable";
import { emptyCart } from "../../redux/Shopping/shopping-actions";

const ShoppingCart = ({ cart, emptyCart }) => {
  const { user } = useAuth0();
  const history = useHistory();
  const subtotal = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  const shipping = 2;
  const num = subtotal * 0.05;
  const tax = num.toFixed(2);
  const totalPrice = subtotal + shipping;

  const checkoutHandler = async () => {
    if (!user) {
      message.error("Please login to continue");
      return;
    }
    if (cart.length === 0) {
      message.info("Please add items to cart");
      return;
    }
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/order`, {
      userId: user.sub.split("|")[1],
      products: cart,
      order_total: totalPrice,
    });
    if (res.data.ok) {
      message.success("Order is successfully placed", 1);
      history.push("/order/completed");
      emptyCart();
    } else {
      message.error("Something went wrong, please try again", 1);
    }
  };
  return (
    <Fragment>
      Your Shopping Cart:
      <div className="shoppingCart">
        <h1>Shopping Cart</h1>

        <div className="shopping_table">
          <div className="t_heading">
            <div className="t_product">Product</div>
            <div className="t_quantity">Quantity</div>
            <div className="t_price">Unit Price</div>
          </div>

          {/* TABLE ITEM */}
          {cart.map((item) => (
            <ShoppingTable key={item.id} item={item} />
          ))}

          {/* TOTAL */}
          <div className="t_total">
            <div className="t_top">
              <div className="t_inner">
                <div>
                  <b>Subtotal:</b>
                </div>
                <div>${subtotal}</div>
              </div>
              <div className="t_inner">
                <div>
                  <b>Tax:</b>
                </div>
                <div>${tax}</div>
              </div>
              <div className="t_inner">
                <div>
                  <b>Shipping:</b>
                </div>
                <div>${shipping}</div>
              </div>
            </div>
            <div className="t_bottom">
              <div className="t_inner">
                <div>
                  <b>Total:</b>
                </div>
                <div className="big">${totalPrice}</div>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="bottom_buttons">
            <button onClick={() => history.push("/menu")}>
              <MdOutlineArrowBackIosNew size={12} />
              Continue Shopping
            </button>
            <button onClick={checkoutHandler}>Go to Checkout</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => dispatch(emptyCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
