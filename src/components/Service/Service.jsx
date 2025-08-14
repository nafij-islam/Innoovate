import React from 'react'
import './service.css'
import { Container,Row,Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import Icon from '../../assets/Icon.png'
const Service = () => {
  return (
    <section>
        <Container>
          <div className='card-main'>
           <Row>
            

            
            <Col lg={4}>
            <ServiceCard src={Icon} title="Grow your business" pera="Nam libero tempore, cum soluta nobis est eligendi optio cumque "/>

            </Col>
            <Col lg={4}>
            <ServiceCard src={Icon} title="Digital marketing" pera="Nam libero tempore, cum soluta nobis est eligendi optio cumque "/>

            </Col>
            <Col lg={4}>
            <ServiceCard src={Icon} title="Search engine optimization" pera="Nam libero tempore, cum soluta nobis est eligendi optio cumque"/>

            </Col>
           
           </Row>
            </div>

        </Container>
    </section>
  )
}

export default Service