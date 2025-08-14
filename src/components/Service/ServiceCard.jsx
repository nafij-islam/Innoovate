import React from 'react'


const ServiceCard = ({src,title,pera}) => {
  return (
    <div className='cardcolor'>
        <img src={src}  />
        <h3 className='service-heading'>{title}</h3>
        <p className='service-pera'>{pera}</p>
    </div>
  )
}

export default ServiceCard