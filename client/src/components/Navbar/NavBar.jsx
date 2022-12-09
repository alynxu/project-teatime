import React, { useState } from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMugHot, FaHeart, FaUserAlt } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";
import Cart from "../Cart";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";
import Button from "../Shared/Button";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div className="nav-container">
      <Navbar style={{ backgroundColor: "#FFFAF5" }} light expand="md">
        <Container>
          <NavbarBrand
            style={{
              paddingTop: "0px",
            }}
          >
            <FaMugHot />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className="mr-auto"
              navbar
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              <li>
                <NavLink
                  tag={RouterNavLink}
                  to="/"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  tag={RouterNavLink}
                  to="/menu"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  tag={RouterNavLink}
                  to="/contact"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  Contact
                </NavLink>
              </li>
            </Nav>

            <NavbarBrand>
              <NavLink
                tag={RouterNavLink}
                to="/shoppingcart"
                activeClassName={
                  location.pathname === "/shoppingcart" ? "active-icon" : ""
                }
              >
                <Cart />
              </NavLink>
            </NavbarBrand>

            <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button onClick={() => loginWithRedirect()}>
                    Sign in/Join now
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FaUserAlt className="mr-3" />  Profile
                    </DropdownItem>

                    <DropdownItem
                      tag={RouterNavLink}
                      to="/orders"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <BsBagCheckFill className="mr-3" /> Orders
                    </DropdownItem>

                    <DropdownItem
                      tag={RouterNavLink}
                      to="/favorites"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FaHeart className="mr-3" /> Favorites
                    </DropdownItem>

                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isAuthenticated && (
              <Nav
                className="d-md-none"
                style={{ backgroundColor: "#FFFAF5" }}
                navbar
              >
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                    />
                    <h6 className="d-inline-block">{user.name}</h6>
                  </span>
                </NavItem>
                <NavItem>
                <FaUserAlt className="mr-3" />
                  <RouterNavLink
                    to="/profile"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  {/* <FontAwesomeIcon icon="user" className="mr-3" /> */}
                  <BsBagCheckFill className="mr-3" />
                  <RouterNavLink
                    to="/orders"
                    activeClassName="router-link-exact-active"
                  >
                    Orders
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon={faHeart} className="mr-3" />
                  <RouterNavLink
                    to="/favorites"
                    activeClassName="router-link-exact-active"
                  >
                    Favorites
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="power-off" className="mr-3" />
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
