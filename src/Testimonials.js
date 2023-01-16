import './styles/Testimonials.css';
import React, {useRef} from 'react';
import testimonialData from './TestimonialData.js';
import Slider from "react-slick";

function Testimonials() {
    const testRef = useRef([]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
        {
            breakpoint: 1000,
            settings: {
                speed: 7000
            }
        }
        ]
        
      };


    
    return (
        <div className="testimonials-container">
            {/* <span ref={testRef} className="testimonial">{testimonialData[currIndex].quote} - {testimonialData[currIndex].author}</span> */}
            <Slider {...settings}>
                {testimonialData.map((test, index) => (
                            <span ref={el => testRef.current[index] = el} className="testimonial" key={test.key}>{test.quote} - {test.author}</span>
                    ))
                }

            </Slider>
            
        </div>
        
        );
}

export default Testimonials;
