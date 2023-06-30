import React from 'react'
import Navbar from '../../components/Navbar'
import './contact.css'
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
        <Navbar />
        <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    </> 
        
  )
}

export default Contact
