import React from "react";
import styled from "styled-components";
import { message } from "antd";
import { Row, Col } from "reactstrap";
import { Form } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import Loading from "../../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import { useEffect, useState } from "react";
import Button from "../../components/Shared/Button";

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/user/`;

const IconHeading = styled.h4`
  color: #000958;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 20px 0;
`;

const TextField = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 20px;
  padding: 0 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  margin: 2px 0;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #000958;
  margin-left: 12px;
  margin-top: 1rem;
`;

export const ProfileComponent = () => {
  const { user, isAuthenticated } = useAuth0();

  const [userData, setUserData] = useState({});

  const handleValidation = (e) => {
    const { name, value } = e.target;
    const update = {};
    update[name] = value;
    setUserData((prevData) => ({ ...prevData, ...update }));
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
    <>
      <h2 style={{ color: "#000958" }}>Profile</h2>
      {isAuthenticated && (
        <Form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <IconHeading>
            <BsFillPersonFill /> Basic Information:
          </IconHeading>
          <Row>
            <Col md={4}>
              <Label for="firstName">First Name:</Label>
              <TextField
                id="firstName"
                name="firstName"
                value={userData.firstName}
                placeholder="First Name"
                onChange={handleValidation}
              />
            </Col>
            <Col md={4}>
              <Label for="lastName">Last Name:</Label>
              <TextField
                id="lastName"
                name="lastName"
                value={userData.lastName}
                placeholder="Last Name"
                onChange={handleValidation}
              />
            </Col>
            <Col md={4}>
              <Label for="email">Email:</Label>
              <TextField
                id="email"
                name="email"
                value={userData.email}
                placeholder="Email address *"
                onChange={handleValidation}
                disabled
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Label for="phone">Phone Number:</Label>
              <TextField
                id="phone_number"
                name="phone_number"
                value={userData.phone_number}
                placeholder="Phone Number"
                onChange={handleValidation}
              />
            </Col>
          </Row>
          <IconHeading>
            <IoLocationSharp /> Delivery Address:
          </IconHeading>
          <Row>
            <Col md={4}>
              <Label for="deliveryFirstName">First Name:</Label>
              <TextField
                id="deliveryFirstName"
                name="deliveryFirstName"
                value={userData.deliveryFirstName}
                placeholder="First Name"
                onChange={handleValidation}
              />
            </Col>
            <Col md={4}>
              <Label for="deliveryLastName">Last Name:</Label>
              <TextField
                id="deliveryLastName"
                name="deliveryLastName"
                value={userData.deliveryLastName}
                placeholder="Last Name"
                onChange={handleValidation}
              />
            </Col>
            <Col md={4}>
              <Label for="deliveryPhone">Phone Number:</Label>
              <TextField
                id="deliveryPhoneNumber"
                name="deliveryPhoneNumber"
                value={userData.deliveryPhoneNumber}
                placeholder="Phone Number"
                onChange={handleValidation}
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Label for="street">Street:</Label>
              <TextField
                id="street"
                name="street"
                value={userData.street}
                placeholder="Street"
                onChange={handleValidation}
              />
            </Col>
            <Col md={4}>
              <Label for="city">City:</Label>
              <TextField
                id="city"
                name="city"
                value={userData.city}
                placeholder="City"
                onChange={handleValidation}
              />
            </Col>
            <Col md={4}>
              <Label for="state">State:</Label>
              <TextField
                id="state"
                name="state"
                value={userData.state}
                placeholder="BC"
                onChange={handleValidation}
                disabled
              />
            </Col>
            <Col md={4}>
              <Label for="zip">Zip:</Label>
              <TextField
                id="zip"
                name="zip"
                value={userData.zip}
                placeholder="Zip"
                onChange={handleValidation}
              />
            </Col>
          </Row>
          <div style={{ margin: "30px 0" }}>
            <Button type="submit">Update the Profile</Button>
          </div>
        </Form>
      )}
    </>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
