import React from "react";
import "./service.css";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";
import Icon from "../../assets/Icon.png";
import Image from './../Reusable/Image';
import Anima1 from '../../assets/Animation7.png'

const Service = () => {
  
  return (
    <section className="work-section">
      <Container>
        <div className="card-main">
          <Row>
            <Col lg={4}>
              <ServiceCard
                src={Icon}
                title="Grow your business"
                pera="Nam libero tempore, cum soluta nobis est eligendi optio cumque "
              />
            </Col>
            <Col lg={4}>
              <ServiceCard
                src={Icon}
                title="Digital marketing"
                pera="Nam libero tempore, cum soluta nobis est eligendi optio cumque "
              />
            </Col>
            <Col lg={4}>
              <ServiceCard
                src={Icon}
                title="Search engine optimization"
                pera="Nam libero tempore, cum soluta nobis est eligendi optio cumque"
              />
            </Col>
          </Row>
        </div>
        <div>
          <div className="ani1">
            <Image src={Anima1}/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Service;
