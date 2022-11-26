import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../../App.css';
import ListGroup from "react-bootstrap/ListGroup";

const Contact = () => {
  return (
    <Card style={{ width: '40rem' }} className="contact-card text-center mb-4">
      <Card.Body>
        <Card.Title>Contact Us</Card.Title>
        <ListGroup horizontal className="contact-list">
          <ListGroup.Item>Phone: 604-789-303</ListGroup.Item>
          <ListGroup.Item>Email: example@email.com</ListGroup.Item>
          <ListGroup.Item>Address: 410 West Georgia, Vancouver, BC</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Contact;