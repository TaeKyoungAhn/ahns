/* eslint-disable no-undef */
import React, {useRef} from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';



const Contact = () => {
    
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs
        .sendForm(process.env.REACT_APP_EMAILSERVICE, process.env.REACT_APP_EMAILTEMPLATE, form.current, {
          publicKey: process.env.REACT_APP_PUBLICKEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Your message has been sent successfully!');
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send your message! Please try again later.');
          },
        );
    };
  
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
            

            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__form-group">
                    <div className="contact__form-div">
                        <input type="text" name='user_name' className="contact__form-input" placeholder="Insert Your name" />
                    </div>
                    <div className="contact__form-div">
                        <input type="email" name='user_email' className="contact__form-input" placeholder="Insert Your email" />
                    </div>
                </div>
                
                <div className="contact__form-div">
                        <input type="text" name="subject" className="contact__form-input" placeholder="Insert Your subject" />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="write your message" />
                    </div>
                <button className="btn" type="submit" value="Send">Send Message</button>        
            </form>
            </div>
            </section>
    );
}

export default Contact;
