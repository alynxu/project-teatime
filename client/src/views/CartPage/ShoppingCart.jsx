import React, { Fragment } from "react";
import "../CartPage/ShoppingCart.scss";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { connect } from "react-redux";
import ShoppingTable from "./ShoppingTable";
const ShoppingCart = ({ cart }) => {

  const subtotal = cart.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );
  
  const shipping = 2;
  const num = subtotal * 0.05;
  const tax = num.toFixed(2);
  const totalPrice = subtotal + shipping;
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
            <button><MdOutlineArrowBackIosNew size={12} />Continue Shopping</button>
            <button>Go to Checkout</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(ShoppingCart);
