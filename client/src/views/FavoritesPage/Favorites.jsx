import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import Product from "../../components/ProductCard/Product";

const Favorites = ({ favoriteItems }) => {
  return (
    <Fragment>
      <h3>Your Favorites:</h3>
      {favoriteItems.length > 0 && (
        <Container
          style={{
            whiteSpace: "nowrap",
            padding: "30px",
            display: "flex",
          }}
        >
          <Row>
            {favoriteItems.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Row>
        </Container>
      )}
      {favoriteItems.length === 0 && <h5>You have no favorite product yet.</h5>}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteItems: state.shop.favoriteItems,
  };
};

export default connect(mapStateToProps)(Favorites);
