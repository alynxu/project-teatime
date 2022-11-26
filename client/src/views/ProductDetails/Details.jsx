import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
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
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

// const AddToCart = styled.button`
//   padding: 15px;
//   border: 2px solid orange;
//   background-color: white;
//   cursor: pointer;
//   font-weight: 500;
//   width: 250px;

//   &:hover{
//       background-color: #f8f4f4;
//   }
// `
const Details = () => {
  return (
    <Container>

      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/CBBCN0F/coldbrew.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Cold Brew</Title>
          <Desc>
            Cold Brew is iced coffee
          </Desc>
          <Price>$5.99</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Addons: </FilterTitle>
              <Button>Boba</Button>
              <Button>Jelly</Button>
              <Button>Pudding</Button>
            </Filter>

          </FilterContainer>
          <FilterContainer>
            <Filter>
              <FilterTitle>Sugar Level: </FilterTitle>
              <FilterSize>
                <FilterSizeOption>Normal</FilterSizeOption>
                <FilterSizeOption>Light</FilterSizeOption>
                <FilterSizeOption>Extra</FilterSizeOption>
                <FilterSizeOption>None</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <FilterContainer>
            <Filter>
              <FilterTitle>Ice Level: </FilterTitle>
              <FilterSize>
                <FilterSizeOption>Normal</FilterSizeOption>
                <FilterSizeOption>Light</FilterSizeOption>
                <FilterSizeOption>Extra</FilterSizeOption>
                <FilterSizeOption>None</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <Button style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              border: "2px solid orange",
              backgroundColor: "white",
              cursor: "pointer",
              fontWeight: "500",
              width: "570px",
            }}
            >ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container >
  );
};

export default Details;
