import React from "react";
import ERAM from "../ERAM-CAPITAL.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar1.css";

function Navbar1() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar__main" id="navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src={ERAM} alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav>
              <NavDropdown
                className="nav__title"
                title="Our Firm"
                id="collasible-nav-dropdown"
              >
                <div className="drop_main">
                  <NavDropdown.Item href="/about" className="drop__item">
                    About Eram Capital
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/history" className="drop__item">
                    History
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/vision" className="drop__item">
                    Vision
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <NavDropdown title="Our Services" id="collasible-nav-dropdown">
                <div className="drop_main">
                  <NavDropdown.Item href="/advisory" className="drop__item">
                    Advisory
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/investment" className="drop__item">
                    Invsetment Management
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/principal" className="drop__item">
                    Principal Investments
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <NavDropdown title="Sector Focus" id="collasible-nav-dropdown">
                <div className="drop_main">
                  <NavDropdown.Item href="/agriculture" className="drop__item">
                    Agriculture
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/energy" className="drop__item">
                    Energy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/estate" className="drop__item">
                    Real Estate{" "}
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <NavDropdown
                title="Investment Screening"
                id="collasible-nav-dropdown"
              >
                <div className="drop_main">
                  <NavDropdown.Item href="/strategic" className="drop__item">
                    Strategic
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/evaluation" className="drop__item">
                    Evaluation Criteria
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
