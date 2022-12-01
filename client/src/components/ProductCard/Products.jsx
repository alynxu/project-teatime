import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import Product from "./Product";
import { useLocation } from "react-router-dom";

const Products = ({ products }) => {
    const location = useLocation();

    //getting the category from the page url
    const category = location.pathname.split("/")[2];

    //filtering the products based on the category
    const filteredProducts = products.filter(
        (product) => product.category === category
    );

    return (
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
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(Products);
