import React from "react";
import "./experinc.css";
import { Container } from "react-bootstrap";
import Image from "./../Reusable/Image";
import Eximg1 from "../../assets/Eximg1.png";
import Eximg2 from "../../assets/Eximg2.png";
import Button from './../Button/Button';

const Experinc = () => {
  return (
    <section className="ex-section">
      <Container>
        <div>
          <p className="exp-top">digital experience</p>
          <h2 className="exp-heading">Connect people in digital life</h2>
        </div>
      </Container>

      <div className="eximg-main">
        <div className="eximg1">
          <Image src={Eximg1} />
        </div>
        <div className="eximg2">
          <Image src={Eximg2}/>
          <div className="ex-img-text">
            <h2 className="ex-img-heading">More than just an ad agency, we harness the tools of traditional and digital.</h2>
            <p className="ex-img-pera">With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.</p>
            <Button className="bannerbtn1">More about us</Button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Experinc;
