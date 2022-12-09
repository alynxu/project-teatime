import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 30px;
  margin: 20px 0;
  color: #010952 !important;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  gap: 20px;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 40%;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 110px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 30%;
  h5,
  h6 {
    color: #010952 !important;
  }
`;

const BillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 2px solid #010952;
  border-bottom: 2px solid #010952;
  width: 100%;
  padding: 20px 0;
  h5,
  h6 {
    color: #010952 !important;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 18px;
`;

const getSubTotal = (products) => {
  const subtotal = products
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);
  return subtotal;
};

const OrderDetail = () => {
  const { orderNumber } = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    const fetchOrder = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/order/${orderNumber}`
      );
      setOrder(res.data.response);
    };
    fetchOrder();
  }, [orderNumber]);
  return (
    <div>
      <h3 style={{ color: "#000958" }}>Order Detail</h3>
      {order && (
        <Card>
          <h4 style={{ color: "#000958" }}>Order Number# {order._id}</h4>
          <Container>
            <ProductsContainer>
              {order.products.map((product) => (
                <Product key={product.id}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <ProductImage alt={product.name} src={product.imageUrl} />
                    <div>
                      <h5 style={{ color: "#000958" }}>{product.name}</h5>
                      <h6>Category: {product.category}</h6>
                      <h6>Quantity: {product.qty}</h6>
                    </div>
                  </div>
                  <h5 style={{ color: "#000958" }}>${product.price}</h5>
                </Product>
              ))}
              <BillContainer>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <h5 style={{ color: "#000958" }}>Subtotal</h5>
                  <h5 style={{ color: "#000958" }}>
                    ${getSubTotal(order.products)}
                  </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <h5 style={{ color: "#000958" }}>Tax</h5>
                  <h5 style={{ color: "#000958" }}>
                    ${(getSubTotal(order.products) * 0.05).toFixed(2)}
                  </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <h5 style={{ color: "#000958" }}>Shipping</h5>
                  <h5 style={{ color: "#000958" }}>$2</h5>
                </div>
              </BillContainer>
              <Total>
                <h5 style={{ color: "#000958" }}>Total</h5>
                <h5 style={{ color: "#000958" }}>${order.order_total}</h5>
              </Total>
            </ProductsContainer>
            <DetailsContainer>
              <h5>Order Date: {moment(order.createdAt).format("LL")}</h5>
              <div>
                <h5>Payment Method:</h5>
                <h6>Credit Card</h6>
              </div>
              <div>
                <h5>Delivery Address:</h5>
                <h6>Street: {order.street}</h6>
                <h6>City: {order.city}</h6>
                <h6>State: {order.state}</h6>
                <h6>Zip: {order.zip}</h6>
              </div>
              <div>
                <h5>Contact:</h5>
                <h6>First Name: {order.deliveryFirstName}</h6>
                <h6>Last Name: {order.deliveryLastName}</h6>
                <h6>Phone Number: {order.deliveryPhoneNumber}</h6>
              </div>
            </DetailsContainer>
          </Container>
        </Card>
      )}
    </div>
  );
};

export default OrderDetail;
