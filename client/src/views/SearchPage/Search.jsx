import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import Product from "../../components/ProductCard/Product";
import { useParams } from "react-router-dom";

const Search = ({ products }) => {
  const { name } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  }, [name, products]);

  return (
    <div>
      <h1 style={{ color: "#000958" }}>Showing search results for "{name}"</h1>
      {filteredProducts.length > 0 && (
        <Container
          style={{
            whiteSpace: "nowrap",
            padding: "50px",
          }}
        >
          <Row>
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Row>
        </Container>
      )}
      {filteredProducts.length === 0 && (
        <h3 style={{ color: "#000958" }}>No products found!</h3>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Search);
