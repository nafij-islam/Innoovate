import React from "react";
import "./customer.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "./../Reusable/Image";
import Customerimg1 from "../../assets/Customerimg1.png";
import slideimg from '../../assets/slideicon.png'
import cusright from '../../assets/customerright.png'

const Coustomer = () => {
  return (
    <section className="customer-section">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="left-main">
              <h2>Our customer say</h2>
              <div className="img-flex">
                <Image src={Customerimg1} />
                <Image src={Customerimg1} />
                <Image src={Customerimg1} />
                <Image src={Customerimg1} />
              </div>
              <p>
                As a leading digital platform in Paris, we look to engage with
                our clients beyond the conventional design and development
                agency relationship, becoming a partner to the people and
                companies we work with.
              </p>

              <div className="slide-main">
                <h2 className="slide-name">Jonathon</h2>
                <Image src={slideimg}/>
              </div>
            </div>
          </Col>

          <Col lg={6}>
          <div className="right-part">
                <Image src={cusright}/>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Coustomer;
