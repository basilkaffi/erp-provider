import React from "react";
import logo from "../assets/logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";

function NavbarContainer(props) {
  const history = useHistory();
  const navItems = ["about", "pricing", "contact"];
  const gotoLogin = (e) => {
    e.preventDefault();
    history.push("/login");
  };
  const fixed = () => {
    return props.fixed === true ? "top" : null;
  };
  return (
    <Navbar fixed={fixed()}>
      <Navbar.Brand bsPrefix="logo">
        <img alt="logo icon" src={logo} />
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={300}
        >
          HOME
        </Link>
      </Navbar.Brand>
      <Nav className="nav-container ml-auto">
        {navItems.map((navItem) => {
          return (
            <Nav.Item bsPrefix="nav-item">
              <Link
                activeClass="active"
                to={navItem}
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}
              >
                {navItem.toUpperCase()}
              </Link>
            </Nav.Item>
          );
        })}
      </Nav>
      <div className="button" onClick={gotoLogin}>
        LOGIN
      </div>
    </Navbar>
  );
}

export default NavbarContainer;
