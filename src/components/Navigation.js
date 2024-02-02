import React from "react";
import logo from "../images/dwb_logo.png";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="w-100">
      <div className="ca">
        <div>Collection Live!</div>
      </div>
      <Navbar expand="lg" variant="dark" className="pt-4">
        <Container>
          <Navbar.Brand as={Link} to="https://magiceden.io/marketplace/dwbs">
            <img src={logo} alt="dwb logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto my-2 my-lg-0">
              <Nav.Link href="#about" className="hover:text-gray-300">
                About
              </Nav.Link>
              <Nav.Link href="#vision" className="hover:text-gray-300">
                Vision
              </Nav.Link>
              <Nav.Link href="#team" className="hover:text-gray-300">
                Team
              </Nav.Link>
              <Nav.Link href="#roadmap" className="hover:text-gray-300">
                Roadmap
              </Nav.Link>

              <Button
                className="launchapp-btn hvr-back-pulse hover:bg-purple-700"
                as={Link}
                to="https://magiceden.io/marketplace/dwbs"
              >
                Collection
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
