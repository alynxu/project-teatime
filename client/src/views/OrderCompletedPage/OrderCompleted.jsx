import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { mobile } from "../../responsive";

const Container = styled.div`
  background-color: #fff;
  padding: 40px 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  gap: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const ButtonOutlined = styled.button`
  padding: 12px 46px;
  background-color: transparent;
  border: 2px solid #010948;
  color: #010948;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #010948;
    color: #fff;
  }
`;

const ButtonFilled = styled.button`
  padding: 12px 46px;
  background-color: #010948;
  border: 2px solid #010948;
  color: #fff;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: transparent;
    color: #010948;
  }
`;

const OrderCompleted = () => {
  const history = useHistory();
  return (
    <Container>
      <div>
        <h1 style={{ color: "#010948" }}>Thank You for Shopping with Us!</h1>
        <h2 style={{ color: "#010948", margin: "20px 0" }}>
          We have successfully recieved your order. You will receive a
          confirmation email shortly.
        </h2>
        <BtnContainer>
          <ButtonOutlined onClick={() => history.push("/menu")}>
            <MdOutlineArrowBackIosNew size={12} />
            Continue Shopping
          </ButtonOutlined>
          <ButtonFilled onClick={() => history.push("/orders")}>
            Track you order here
          </ButtonFilled>
        </BtnContainer>
      </div>
    </Container>
  );
};

export default OrderCompleted;
