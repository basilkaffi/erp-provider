import React from "react";
import logo from "../assets/logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";

function NavbarContainer() {
  const history = useHistory();
  const gotoLogin = (e) => {
    e.preventDefault();
    history.push("/login");
  };
  return (
    <Navbar fixed="top" sticky="top">
      <Navbar.Brand bsPrefix="logo">
        <img alt="logo icon" src={logo} />
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-51}
          duration={600}
        >
          ComName
        </Link>
      </Navbar.Brand>
      <Nav className="nav-container ml-auto mr-4">
        <Nav.Item bsPrefix="nav-item">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-51}
            duration={300}
          >
            About
          </Link>
        </Nav.Item>
        <Nav.Item bsPrefix="nav-item">
          <Link
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-50}
            duration={300}
          >
            Pricing
          </Link>
        </Nav.Item>
        <Nav.Item bsPrefix="nav-item">
          <Link
            activeClass="active"
            to="more"
            spy={true}
            smooth={true}
            offset={-50}
            duration={300}
          >
            More
          </Link>
        </Nav.Item>
        <Nav.Item bsPrefix="nav-item">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={300}
          >
            Contact
          </Link>
        </Nav.Item>
      </Nav>
      <div className="button" onClick={gotoLogin}>
        LOGIN
      </div>
    </Navbar>
  );
}

export default NavbarContainer;
