import React from 'react'
import './tolk.css'
import { Container } from 'react-bootstrap';
import Button from './../Button/Button';
import tolkani from '../../assets/tolkanim.png'
import Image from './../Reusable/Image';

const Tolk = () => {
  return (
   <section className='tolk-section'>
        <Container>
            <div className='tolk-main'>
                <div>
                    <h3>Lets talk</h3>
                <h2>Got a project?</h2>
                </div>
                
                <Button>Contact us</Button>

            </div>
            <p>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
        </Container>

        <div className='tolk-anima'>
            <Image src={tolkani}/>
        </div>
   </section>
  )
}

export default Tolk