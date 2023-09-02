import React from 'react'
import { Carousel } from 'react-bootstrap';


function ShowCarousel({testimonial}) {
  return (
    <Carousel.Item>
        <img className="w-100" src="assets/images/testimonial-bg.png" alt="First slide" />
    <Carousel.Caption>
        <p>{testimonial}</p>
    </Carousel.Caption>
    </Carousel.Item>
  )
}

export default ShowCarousel
