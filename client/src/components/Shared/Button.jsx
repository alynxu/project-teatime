import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
height: 50px;
    border: none;
    border-radius: 30px;
    background-color: #FF5B2E;
    color: #fff;
    font-weight: 700;
    padding: 0 2rem;
    cursor: pointer;
    border: 1px solid #FF5B2E;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: transparent;
      color: #FF5B2E;
      border: 1px solid #FF5B2E;
    } 
  }
}`;

const Button = (props) => {
  return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
};

export default Button;
