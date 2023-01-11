import './styles/Testimonials.css';
import React, {useEffect, useState} from 'react';
import testimonialData from './TestimonialData.js';

function Testimonials() {
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            rotateTestimonials();
        }, 3500);
        return () => clearInterval(interval);
    })
    const rotateTestimonials = () =>{
        setCurrIndex((currIndex + 1) % testimonialData.length);
    }
    return (
        <div className="testimonials-container">
            <span className="testimonial">{testimonialData[currIndex].quote} - {testimonialData[currIndex].author}</span>
        </div>
    );
}

export default Testimonials;
