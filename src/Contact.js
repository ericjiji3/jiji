import './styles/Contact.css';
import React, {useEffect, useState, useRef} from 'react';
import p3pic from './images/p3pic.png';
import p33pic from './images/p33pic.png';
import mail from './images/icons/mail.png';
import map from './images/icons/map.png';
import phoneIcon from './images/icons/phone.png';
import emailjs from '@emailjs/browser';

function Contact({reference, onClick}) {
    const containerRef = useRef(null);
    const buttonRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);

    
    const form = useRef();

    function validateFields(data){
        var validate = true;
        Object.keys(data).forEach(function(field, index){
            if(field === 'email'){
                var email = data[field];
                email.toLowerCase();
                if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || !email){
                    validate = false;
                    setEmailErr(true);
                }
            }
            if(field === 'name'){
                if(!data[field]){
                    validate = false;
                    setNameErr(true);
                }
            }
            if(field === 'phone'){
                if(!data[field]){
                    validate = false;
                    setPhoneErr(true);
                }
            }
        })
        return validate;
    }
    function sendEmail(e){
        e.preventDefault();
        setNameErr(false);
        setEmailErr(false);
        setPhoneErr(false);

        var data = {
            'name' : name,
            'company' : company,
            'phone' : phone,
            'email' : email,
            'message' : message
        }

        console.log(data);
        if(validateFields(data)){
            buttonRef.current.classList.add('loading');
            emailjs.sendForm('service_2dt5qs8', 'template_2j5t0ph', e.target, 'user_C7gzVm4ecUCU38p1wXg1v')
            .then((result) => {
                buttonRef.current.classList.remove('loading');
                buttonRef.current.classList.add('success');
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                buttonRef.current.classList.remove('loading');
                buttonRef.current.classList.add('error');
                console.log(error.text);
                e.target.reset();
            });
        } else{
            buttonRef.current.classList.remove('loading');
            buttonRef.current.classList.add('error');
            e.target.reset();
        }
        
    }
    useEffect(() => {
        const callbackFunction = (entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
            console.log(isVisible);
        }
        
        const observer = new IntersectionObserver(callbackFunction, {
            root: null,
            rootMargin: '0px 0px -10px 0px',
            threshold: .5
        })
        const observedContact = containerRef.current;
        if(observedContact){
            observer.observe(observedContact);
        }
        return () => {
            if(observedContact){
                observer.unobserve(observedContact)
            }
        }
    }, [containerRef, isVisible])

    return (
        <div className="contact-container" ref={reference}>
            <div id="circle-container">
                <div id="container-inside">
                    <div id="circle-small"></div>
                    <div id="circle-medium"></div>
                    <div id="circle-large"></div>
                    <div id="circle-xlarge"></div>
                    <div id="circle-xxlarge"></div>
                </div>
            </div>
            
            <div className={isVisible ? 'header-image animate' : 'header-image'} ref={containerRef}>
                <div className='header-container'>
                    <h2>Lets Get to Work</h2>
                    <h3>Call, Text, or email . . . I’ll respond within  24 hours!</h3>
                </div>
                <img className="contactPic1" src={p3pic} alt="oops"/>
                <img className="contactPic2" src={p33pic} alt="oops"/>
            </div>
            
            <div className={isVisible ? 'form-container animate' : 'form-container'}>
                
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <label className="name-input">
                        <span className="req">Full Name</span>
                        <input className="smaller" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <span className={nameErr ? 'req-text active' : 'req-text'}>*Required Field</span>
                    </label>
                    <label className="company-input">
                        <span>Company</span>
                        <input className="smaller" type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)}/>
                    </label>
                    <label className="phone-input">
                        <span className="req">Phone</span>
                        <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        <span className={phoneErr ? 'req-text active' : 'req-text'}>*Required Field</span>
                    </label>
                        <label className="email-input">
                        <span className="req">Email</span>
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <span className={emailErr ? 'req-text active' : 'req-text'}>*Required Field / Invalid Input</span>
                    </label>
                    <label className="message-input">
                        <span>Message</span>
                        <textarea type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </label>
                    <button className="submit-butt" type="submit" value="submit" ref={buttonRef}><span class='submit-text'>Submit</span><span className="loading-animation"></span><div class="checkmark"></div></button>
                </form>
                <div className="contact-icons">
                    <a href="tel: 254-307-8168" className="phone-container">
                        
                            <img src={phoneIcon} alt="oops"/>
                            <span>254-307-8168</span>
                        
                    </a>
                    <div className="map-container">
                        <img src={map} alt="oops"/>
                        <span>Austin, TX</span>
                    </div>
                    <a href="mailto: jijiji.web@gmail.com" className="mail-container">
                        <img src={mail} alt="oops"/>
                        <span>jijiji.web@gmail.com</span>
                    </a>
                </div>
                
            </div>
        </div>

    );
}

export default Contact;
