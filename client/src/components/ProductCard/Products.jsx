import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import Product from './Product';

const Products = ({products}) => {
    
    return (
        <Container style={{
            whiteSpace: "nowrap",
            padding: "50px"
        }}>
        <Row>
            {
                products.map((product)=> (
                    <Product key={product.id} product={product}/>
                ))
            }
            </Row>
        </Container>
    );

};

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
      
    };
  };
  
export default  connect(mapStateToProps)(Products);