import React from "react";
import "./company.css";
import { Container, Row, Col } from "react-bootstrap";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";
import company5 from "../../assets/company5.png";
import company6 from "../../assets/company6.png";
import Image from "./../Reusable/Image";

const Company = () => {
  return (
    <section className="company-section">
      <Container>
        <div className="heading">
          <h2 className="company-heading">
            Trusted by top global companies And orginizations
          </h2>
        </div>
        <Row>
          <Col lg={2}>
            {" "}
            <Image src={company1} />{" "}
          </Col>
          <Col lg={2}>
            {" "}
            <Image src={company2} />{" "}
          </Col>
          <Col lg={2}>
            {" "}
            <Image src={company3} />{" "}
          </Col>
          <Col lg={2}>
            {" "}
            <Image src={company4} />{" "}
          </Col>
          <Col lg={2}>
            {" "}
            <Image src={company5} />{" "}
          </Col>
          <Col lg={2}>
            {" "}
            <Image src={company6} />{" "}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
