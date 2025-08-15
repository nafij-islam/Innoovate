import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "./../Reusable/Image";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <section className="footer-section">
      <Container>
        <Row>
          <Col lg={6}>
            <div>
              <Image src={Logo} />
            </div>
            <p className="logo-pera">
              Install any demo or template with a single click. You can mix and
              match all the demos & templates. Every demo can be turned into one
              or multi-page.
            </p>
          </Col>
          <Col lg={2}>
            <div>
              <h2>Features</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Benifit</li>
                <li>Pricing</li>
                <li>Blog</li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <h2>Products</h2>
              <ul>
                <li>Task Management</li>
                <li>Company growth</li>
                <li>Time tracking</li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <h2>Support</h2>
              <ul>
                <li>Customer service</li>
                <li>Accessibility</li>
                <li>Contact us</li>
              </ul>
            </div>
          </Col>
        </Row>

       <div className="copyright">
        <p className="copy-right-part">@20201 Innovate.All rights reserved.</p>

       <div className="copy-right">
         <p className="copy-right-part">Privacy policy</p>
        <p className="copy-right-part">Terms & condition</p>
       </div>
       </div>
      </Container>
    </section>
  );
};

export default Footer;
