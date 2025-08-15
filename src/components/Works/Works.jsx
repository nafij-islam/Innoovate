import React from "react";
import "./works.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "./../Reusable/Image";
import workani1 from "../../assets/WorkAni1.png";
import workani2 from "../../assets/WorkAni2.png";
import Button from "./../Button/Button";
import Workimg1 from "../../assets/Workimg1.png";
import Workimg2 from "../../assets/WorkImg-2.png";

const Works = () => {
  return (
    <section className="work-section">
      <Container>
        <div>
          <div className="workani1">
            <Image src={workani1} />
          </div>

          <div className="workani2">
            <Image src={workani2} />
          </div>
        </div>

        <div className="work-heading">
          <div>
            <p className="work-pera">digital experience</p>
            <h2 className="work-head">
              The hundred of completed works still counting
            </h2>
          </div>

          <div>
            <Button className="workbtn1">View all</Button>
          </div>
        </div>

        <div className="card-main-pad">
          <div className="work-box">
            <div className="card-one">
              <div className="inner">
                <h3 className="inner-text">Mobile App</h3>
                <p className="inner-pera">Read more</p>
              </div>
            </div>

            <div className="card-two">
              <div className="inner">
                <h3 className="inner-text">Ecommerce Solution</h3>
                <p className="inner-pera">Read more</p>
              </div>
            </div>


            

              <div className="card-two">
              <div className="inner">
                <h3 className="inner-text">Ecommerce Solution</h3>
                <p className="inner-pera">Read more</p>
              </div>
            </div>

             <div className="card-one">
              <div className="inner">
                <h3 className="inner-text">Mobile App</h3>
                <p className="inner-pera">Read more</p>
              </div>
            </div>


            

            
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Works;
