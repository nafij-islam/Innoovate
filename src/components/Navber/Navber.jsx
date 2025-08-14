import React from "react";
import "./Navber.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Image from "./../Reusable/Image";
import Logo from "../../assets/Logo.png";
import { IoIosArrowDown } from "react-icons/io";
import Button from './../Button/Button';



const Navber = () => {
  return (
    <section className="navber-section">
      <Container className="g-0">
        <Navbar expand="lg" className="g-0">
          <Navbar.Brand href="#home">
            <Image src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto menu-part">
              <Nav.Link className="menu-list" href="#home">
                Home <IoIosArrowDown />
              </Nav.Link>
              <Nav.Link className="menu-list" href="#link">
                About <IoIosArrowDown />
              </Nav.Link>
              <Nav.Link className="menu-list" href="#link">
                Service <IoIosArrowDown />
              </Nav.Link>
              <Nav.Link className="menu-list" href="#link">
                Portfolio <IoIosArrowDown />
              </Nav.Link>
              <Nav.Link className="menu-list" href="#link">
                Price <IoIosArrowDown />
              </Nav.Link>
              <Nav.Link className="menu-list" href="#link">
                Blog <IoIosArrowDown />
              </Nav.Link>

              
            </Nav>
            <div className="btnmain">
                <Button className='btnstyle'>Contact Us</Button>
              </div>
          </Navbar.Collapse>
        </Navbar>
        
      </Container>
    </section>
  );
};

export default Navber;
