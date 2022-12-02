import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { message } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import Button from "../../components/Shared/Button";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  height: 400px;
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 40px;
  color: #fe5d2f;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  ${mobile({ width: "100%" })}
`;

const IconButton = styled.button`
  padding: 12px 26px;
  border: 2px solid grey;
  border-radius: 30px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Details = ({ products, addToCart }) => {
  const { user } = useAuth0();

  const { id } = useParams();
  const [product, setProduct] = useState();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const desiredProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(desiredProduct);
  }, [id, products]);

  const addToCartHandler = () => {
    if (!user) {
      message.error("Please login to add to cart");
      return;
    }
    addToCart(product.id);
  };

  return (
    <Container>
      {product && (
        <Wrapper>
          <ImgContainer>
            <Image src={product?.imageUrl} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product?.name}</Title>
            <Price>${product?.price}</Price>
            <Desc>{product?.description}</Desc>

            <AddContainer>
              <Button onClick={addToCartHandler}>Add to Cart</Button>
              <IconButton
                onClick={() => setIsFavorite((prevValue) => !prevValue)}
              >
                {!isFavorite && <HeartOutlined />}
                {isFavorite && <HeartFilled style={{ color: "red" }} />}
              </IconButton>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}
      {!product && <h1>Product not found!</h1>}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
