import React from 'react'
import { Container } from 'react-bootstrap';
import Button from './../Button/Button';
import './banner.css'

const Banner = () => {
  return (
    <section className='banner-section'>
        <Container>
            <div className='heading-part'>
                <h1>We are a full range design agency</h1>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                <div>
                    <Button className="bannerbtn1">Contact us</Button>
                    <Button className="bannerbtn2">Showcase</Button>
                </div>
            </div>

        </Container>
    </section>
  )
}

export default Banner