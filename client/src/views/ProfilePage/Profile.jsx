import React from "react";
import { message } from "antd";
import { Row, Col, Input } from "reactstrap";
import { Form, FormGroup, Button } from "react-bootstrap";
import Loading from "../../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import { useEffect, useState } from "react";

const baseUrl = "http://localhost:3002/user/";

export const ProfileComponent = () => {
  const { user, isAuthenticated } = useAuth0();

  // var userData = null;

  const [userData, setUserData] = useState({});

  // const [formvalue, setformvalue] = useState({
  //   given_name: "",
  //   family_name: "",
  //   phone_number: "",
  //   location: ""
  // });

  const handleValidation = (e) => {
    const { name, value } = e.target;
    // setformvalue({ ...formvalue, [name]: value });
    const update = {};
    update[name] = value;
    setUserData(update);
  };

  function getUserData() {
    console.log("function call, getUserData()");
    var requestOptions = {
      method: "GET",
    };

    fetch(baseUrl + "get-by-email?email=" + user.email, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        result = JSON.parse(result);
        console.log("result", result);
        setUserData(result);
        // setformvalue({
        //   given_name: result.given_name || "",
        //   family_name: result.family_name || "",
        //   phone_number: result.phone_number || "",
        //   location: result.location || "",
        // });
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getUserData();
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      // body: formvalue
      body: JSON.stringify(userData),
    };

    console.log("requestOptions", requestOptions);

    fetch(baseUrl + "update-by-email?email=" + user.email, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("result", result);
        console.log("Profile updated successfully");
        message.success("Profile updated successfully");
      })
      .catch((error) => {
        console.log("error", error);
        message.error("Error in updating profile");
      });
  }

  return (
    isAuthenticated && (
      <Form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <Row>
          <Col md={6}>
            <FormGroup>
              <label htmlFor="Given Name">Given Name</label>
              <Input
                id="givenName"
                name="given_name"
                value={userData.given_name}
                placeholder={user.given_name}
                onChange={handleValidation}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <label htmlFor="Family Name">Family Name</label>
              <Input
                id="familyName"
                name="family_name"
                value={userData.family_name}
                placeholder={user.family_name}
                onChange={handleValidation}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormGroup>
              <label htmlFor="exampleAddress">Email Address</label>
              <Input
                disabled
                id="exampleEmail"
                name="email"
                placeholder={user.email}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Input
                id="phoneNumber"
                name="phone_number"
                value={userData.phone_number}
                placeholder={user.phone_number}
                onChange={handleValidation}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <label htmlFor="location">Location</label>
          <Input
            id="location"
            name="location"
            placeholder={user.locale}
            value={userData.location}
            onChange={handleValidation}
          />
        </FormGroup>
        <Button type="submit" className="mb-4 mt-3">
          Update the Profile
        </Button>
      </Form>
    )
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
