import './styles/Contact.css';
import React, {useEffect, useState} from 'react';
import p3pic from './images/p3pic.png';
import mail from './images/icons/mail.png';
import map from './images/icons/map.png';
import phone from './images/icons/phone.png';


function Contact({reference, onClick}) {
    return (
        <div className="contact-container" ref={reference}>
            <div className="header-image">
                <div className='header-container'>
                    <h2>Lets Get to Work</h2>
                    <h3>Call, Text, or email . . . I’ll respond within  24 hours!</h3>
                </div>
                <img src={p3pic}/>
            </div>
            <div className='form-container'>
                <form className="form">
                    <label className="name-input">
                        <span>Full Name</span>
                        <input type="text" name="name" />
                    </label>
                    <label className="company-input">
                        <span>Company</span>
                        <input type="text" name="name" />
                    </label>
                    <label className="phone-input">
                        <span>Phone</span>
                        <input type="text" name="name" />
                    </label>
                        <label className="email-input">
                    <span>Email</span>
                        <input type="text" name="name" />
                    </label>
                    <label className="message-input">
                        <span>Message</span>
                        <textarea
                            value=""
                        />
                    </label>
                    <span className="submit-butt" type="submit">Submit</span>
                </form>
                <div className="contact-icons">
                    <div className="phone-container">
                        <img src={phone}/>
                        <span>713-885-7540</span>
                    </div>
                    <div className="map-container">
                        <img src={map}/>
                        <span>Austin, TX</span>
                    </div>
                    <div className="mail-container">
                        <img src={mail}/>
                        <span>eric.ji3333@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
