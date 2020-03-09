import React, { Component } from "react";
import logo from "../images/JMlogo2.png";
import "../style/navBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavBar1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown
                title="Do nothing Dropdown"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Nothing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another Nothing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  A nothing
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Not a button
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link
                eventKey={2}
                style={{
                  fontWeight: "700",
                  fontSize: "20px"
                }}
                href="#memes"
              >
                BOT-O-MAT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar1;
