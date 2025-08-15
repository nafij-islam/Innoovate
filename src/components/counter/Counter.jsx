import React from "react";
import "./counter.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from './../Button/Button';
import Image from './../Reusable/Image';
import counterAni1 from '../../assets/counterAni1.png'

const Counter = () => {
  return (
    <section className="count-section">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="count-main">
              <div className="count-card">
                <h2 className="count-head">19+</h2>
                <p className="count-pera">Total top service</p>
              </div>

              <div className="count-card">
                <h2 className="count-head">27+</h2>
                <p className="count-pera">Total top service</p>
              </div>

              <div className="count-card">
                <h2 className="count-head">98%</h2>
                <p className="count-pera">Total top service</p>
              </div>
              <div className="count-card">
                <h2 className="count-head">1,458</h2>
                <p className="count-pera">Usual users</p>
              </div>
            </div>
          </Col>
          <Col lg={5}>

          <div className="count-right">
            <h2>The hundred of completed works still counting</h2>
            <p>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
            <Button>More about us</Button>
          </div>

          <div className="couonter-animation1">
            <Image src={counterAni1}/>
          </div>
          
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Counter;
