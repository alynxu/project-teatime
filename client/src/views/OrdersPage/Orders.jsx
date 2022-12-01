import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import OrderCard from "../../components/OrderCard/OrderCard";
import { useAuth0 } from "@auth0/auth0-react";

const Orders = () => {
  const { user } = useAuth0();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/order/all`,
        {
          userId: user.sub.split("|")[1],
        }
      );
      setOrders(res.data.response.reverse());
    };
    fetchOrders();
  }, [user]);

  return (
    <Fragment>
      <h1 style={{ color: "#010952" }}>Orders</h1>
      {orders.length > 0 &&
        orders.map((order) => (
          <OrderCard
            key={order._id}
            orderNumber={order._id}
            orderDate={order.createdAt}
            orderTotal={order.order_total}
            orderItems={order.products}
          />
        ))}
      {orders.length === 0 && (
        <h3 style={{ color: "#010952" }}>No orders found</h3>
      )}
    </Fragment>
  );
};

export default Orders;
