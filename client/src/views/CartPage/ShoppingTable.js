import React from 'react'

import "../CartPage/ShoppingCart.scss";
import { MdDoNotDisturbOn, MdAddCircle, MdOutlineCancel} from "react-icons/md";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../redux/Shopping/shopping-actions";
function ShoppingTable({ item, adjustQty, removeFromCart }) {
  //     const [input, setInput] = useState(item.qty);
  //     const onChangeHandler = (e) => {
  //     setInput(e.target.value);
  //     adjustQty(item.id, e.target.value);
  //   };
  const increaseQty = (id, qty) => {
    const newQty = qty + 1;
    adjustQty(id, newQty);
  }

  const decreaseQty = (id, qty) => {
    const newQty = qty - 1;
    if (1 >= qty) {
      return;
    }
    adjustQty(id, newQty)
  }

  return (
    <>
      <div className="t_item">
        <div className="ti_product">
          <div className="ti_image">
            <img
              src={item.imageUrl}
              alt={item.name}
            />
          </div>

          <span>{item.name}</span>
        </div>
        <div className="ti_quantity">
          <div className="cursor" onClick={() => decreaseQty(item.id, item.qty)}>
            <MdDoNotDisturbOn size={26} color={"#FF5B2E"} />
          </div>
          <div>{item.qty}</div>
          <div className="cursor" onClick={() => increaseQty(item.id, item.qty)}>
            <MdAddCircle size={26} color={"#FF5B2E"} />
          </div>
        </div>
        <div className="ti_price">{item.price}</div>
        <div className="cursor" onClick={() => removeFromCart(item.id)}>
          <MdOutlineCancel size={26} color={"red"} />
        </div>
      </div>
    </>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ShoppingTable)