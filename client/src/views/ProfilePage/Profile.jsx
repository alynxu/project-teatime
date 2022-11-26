import React from "react";
import { Row, Col, Input } from "reactstrap";
import { Form, FormGroup, Button } from "react-bootstrap";
import Loading from "../../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user, isAuthenticated } = useAuth0();

  /*
  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
    </Container>
  );
  */

  //A way to display profile information as an unordered list.
  /* 
  return (
    isAuthenticated && (
      <article className="column">
        <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        <h2>{user?.name}</h2>
        <ul>
          {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}</li>)}
        </ul>
      </article>
    )
  )*/

  return (
    isAuthenticated && (
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <label for="Given Name">
                Given Name
              </label>
              <Input
                id="givenName"
                name="Given Name"
                placeholder={user.given_name}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <label for="Family Name">
                Family Name
              </label>
              <Input
                id="familyName"
                name="Family Name"
                placeholder={user.family_name}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormGroup>
              <label for="exampleAddress">
                Email Address
              </label>
              <Input
                id="exampleEmail"
                name="emailAddress"
                placeholder={user.email}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <label for="phoneNumber">
                Phone Number
              </label>
              <Input
                id="phoneNumber"
                name="Phone Number"
                placeholder={user.phone_number}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <label for="location">
            Location
          </label>
          <Input
            id="location"
            name="Location"
            placeholder={user.locale}
          />
        </FormGroup>
        <Button className="mb-4 mt-3">
          Update the Profile
        </Button>
      </Form>
    )
  )
};



export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
