/* eslint-disable no-undef */
import React, {useRef} from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        alert("Your message has been sent successfully");


        emailjs.sendForm('service_7yvmdor', 'template_5z5z5z5', form.current, 'user_5z5z5z5')
    }

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Contact.</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Personal Info.</h3>
                    <p className="contact__details">Name   : 안 태 경</p>
                    <p className="contact__details">E-mail : sg9956@naver.com</p>
                    <p className="contact__details">Phone  : 010-5380-8283</p>
                </div>
            

            <form action="" className="contact__form">
                <div className="contact__form-group">
                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input" placeholder="Insert Your name"/>
                    </div>
                    <div className="contact__form-div">
                        <input type="email" className="contact__form-input" placeholder="Insert Your email"/>
                    </div>
                </div>
                
                <div className="contact__form-div">
                        <input type="text" className="contact__form-input" placeholder="Insert Your subject"/>
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <textarea name="" id="" cols="30" rows="10" className="contact__form-input" placeholder="write your message"/>
                    </div>
                <button className="btn" ref={form} onClick={sendEmail}>Send Message</button>        
            </form>
            </div>
            </section>
    );
}

export default Contact;
