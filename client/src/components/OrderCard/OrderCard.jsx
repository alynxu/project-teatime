import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import moment from "moment";

const Image = styled.img`
  width: 200px;
  height: 160px;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  width: fit-content;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 6px 30px;
  border: 1px solid #010952;
  background-color: transparent;
  color: #010952;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 22px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #010952;
    color: #fff;
  }
`;

const OrderCard = ({ orderNumber, orderDate, orderTotal, orderItems }) => {
  const history = useHistory();
  return (
    <Container
      style={{
        backgroundColor: "white",
        boxShadow: "0px 1px 10px rgba(0,0,0,0.1)",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px 0",
      }}
    >
      <h3 style={{ color: "#010952" }}>Order Number: {orderNumber}</h3>
      <div style={{ margin: "16px 0" }}>
        <h4 style={{ color: "#010952" }}>
          Order Date: {moment(orderDate).format("LL")}
        </h4>
        <h4 style={{ color: "#010952" }}>Order Total: ${orderTotal}</h4>
      </div>
      <Row md={2} style={{ padding: "16px 0" }}>
        <Col>
          <Row xs={2}>
            {orderItems.map((item, index) => (
              <Col key={index} style={{ width: "fit-content" }}>
                <ImageContainer>
                  <Image src={item.imageUrl} alt="" />
                </ImageContainer>
              </Col>
            ))}
          </Row>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              history.push(`/order/${orderNumber}`);
            }}
          >
            See the Details
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderCard;
