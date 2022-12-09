import React, { Component } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  NavLink,
} from "reactstrap";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center" style={{ color: "#000958" }}>
          Categories
        </h2>
        <Container style={{ whiteSpace: "nowrap"}}>
          <Row>
            <Col style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
              <NavLink
                tag={RouterNavLink}
                to="/categories/coffee"
                activeClassName="selected"
              >
                <Card
                  style={{
                    maxWidth: "190px",
                    backgroundColor: "#FFF0E1",
                    border: "none"
                  }}
                >
                  <CardBody>
                    <CardTitle
                      tag="h3"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#000958",
                      }}
                    >
                      Coffee
                    </CardTitle>
                  </CardBody>
                  <img
                    alt="Coffee"
                    src={require("../../assets/coffee.png")}
                    width="190px"
                    height="190px"
                  />
                </Card>
              </NavLink>
            </Col>

            <Col style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
              <NavLink
                tag={RouterNavLink}
                to="/categories/milktea"
                activeClassName="selected"
              >
                <Card
                  style={{
                    maxWidth: "190px",
                    backgroundColor: "#FFF0E1",
                    border: "none"
                  }}
                >
                  <CardBody>
                    <CardTitle
                      tag="h3"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#000958",
                      }}
                    >
                      Milktea
                    </CardTitle>
                  </CardBody>
                  <img
                    alt="Milktea"
                    src={require("../../assets/milktea.png")}
                    width="190px"
                    height="190px"
                  />
                </Card>
              </NavLink>
            </Col>

            <Col style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
              <NavLink
                tag={RouterNavLink}
                to="/categories/tea"
                activeClassName="selected"
              >
                <Card
                  style={{
                    maxWidth: "190px",
                    backgroundColor: "#FFF0E1",
                    border: "none",
                  }}
                >
                  <CardBody>
                    <CardTitle
                      tag="h3"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#000958",
                      }}
                    >
                      Tea
                    </CardTitle>
                  </CardBody>
                  <img
                    alt="Card cap"
                    src={require("../../assets/tea.png")}
                    width="190px"
                    height="190px"
                  />
                </Card>
              </NavLink>
            </Col>

            <Col style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
              <NavLink
                tag={RouterNavLink}
                to="/categories/smoothies"
                activeClassName="selected"
              >
                <Card
                  style={{
                    maxWidth: "190px",
                    backgroundColor: "#FFF0E1",
                    border: "none",
                  }}
                >
                  <CardBody>
                    <CardTitle
                      tag="h3"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#000958",
                      }}
                    >
                      Smoothies
                    </CardTitle>
                  </CardBody>
                  <img
                    alt="Card cap"
                    src={require("../../assets/smoothies.png")}
                    width="190px"
                    height="190px"
                  />
                </Card>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Content;
