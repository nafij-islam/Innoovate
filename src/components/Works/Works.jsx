import React from "react";
import "./works.css";
import { Container } from "react-bootstrap";
import Image from "./../Reusable/Image";
import workani1 from "../../assets/WorkAni1.png";
import Button from "./../Button/Button";
import Workimg1 from "../../assets/Workimg1.png";
import Workimg2 from "../../assets/Workimg2.png";

const Works = () => {
  return (
    <section className="work-section">
      <Container>
        <div>
          <div className="workani1">
            <Image src={workani1} />
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

        <div className="work-card-main">
          <div className="hover-img-main">
            <Image src={Workimg1} />
            <div className="work-hover-text">
              <h2 className="work-card-head">Mobile App</h2>
              <p className="work-card-pera">Read more</p>
            </div>
          </div>


          <div className="hover-img-main2">
            <Image src={Workimg1} />
            <div className="work-hover-text">
              <h2 className="work-card-head">Mobile App</h2>
              <p className="work-card-pera">Read more</p>
            </div>
          </div>
           <div className="hover-img-main">
            <Image src={Workimg1} />
            <div className="work-hover-text">
              <h2 className="work-card-head">Mobile App</h2>
              <p className="work-card-pera">Read more</p>
            </div>
          </div>
           <div className="hover-img-main">
            <Image src={Workimg1} />
            <div className="work-hover-text">
              <h2 className="work-card-head">Mobile App</h2>
              <p className="work-card-pera">Read more</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Works;
