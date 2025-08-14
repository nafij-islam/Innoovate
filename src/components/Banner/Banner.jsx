import React from "react";
import { Container } from "react-bootstrap";
import Button from "./../Button/Button";
import "./banner.css";
import Aniimg1 from '../../assets/ImgAnim1.png'
import Image from "./../Reusable/Image";
import Animation1 from '../../assets/Animation1.png'
import Animation2 from '../../assets/Animation2.png'
import Animation3 from '../../assets/Animation3.png'
import Animation4 from '../../assets/Animation4.png'
import Animation5 from '../../assets/Animation5.png'
import Animation6 from '../../assets/Animation6.png'


const Banner = () => {
  return (
    <section className="banner-section">
      <Container>
        <div>
          <div className="aniimg1">
            <Image src={Aniimg1}/>
           </div>
           <div className="animation1">
             <Image src={Animation1}/>
           </div>
            <div className="animation2">
             <Image src={Animation2}/>
           </div>
            <div className="animation3">
             <Image src={Animation3}/>
           </div>
           
            <div className="animation4">
             <Image src={Animation5}/>
           </div>
            <div className="animation5">
             <Image src={Animation6}/>
           </div>

            <div className="animation6">
             <Image src={Animation4}/>
           </div>

           <div className="ani-out">
            <div className="ani-inner"></div>
           </div>
        </div>
        <div className="heading-part">
          <h1>We are a full range design agency</h1>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime.
          </p>
          <div>
            <Button className="bannerbtn1">Contact us</Button>
            <Button className="bannerbtn2">Showcase</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
