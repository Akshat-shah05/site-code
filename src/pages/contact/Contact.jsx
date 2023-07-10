import React from 'react'
import './contact.css'
import '../../components/fade.css';
import FadeinView from '../../components/FadeinView';
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

function Contact() {

  const form = useRef();

  const sendEmail = () => {

    emailjs.sendForm('service_2fog917', 'template_6io3l4n', form.current, '_z3HjuLnRK5L7Bw6R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
        <FadeinView>
            <div className="full-contact-container">
                <div className="form-text">
                    <h1 id="contact">Want to connect? Send me a message below!</h1>
                </div>
                <div className="main-form-container">
                    <div className="form-container">
                        <form ref={form} onSubmit={sendEmail} className="form">
                            <div className="name-label">
                                <label>Name</label>
                                <input type="text" name="user_name" className="input-box"/>
                            </div>
                            <div className="email-label">
                                <label>Email</label>
                                <input type="email" name="user_email" className="input-box"/>
                            </div>
                            <div className="message-label">
                                <label>Message</label>
                                <textarea name="message" className="input-box" id="text-area"/>
                                <input type="submit" value="Send" className="input-box" id="submit-form"/>
                            </div>

                            
                        </form>
                    </div>
                </div>
            </div> 
        </FadeinView>
    </>
  )
}

export default Contact
