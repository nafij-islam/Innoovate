import React from 'react'
import './service.css'
import { Container } from 'react-bootstrap';
import ServiceCard from './ServiceCard';

const Service = () => {
  return (
    <section>
        <Container>
            <div>
                <ServiceCard/>
            </div>

        </Container>
    </section>
  )
}

export default Service