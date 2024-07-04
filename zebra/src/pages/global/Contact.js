import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Button from '@mui/material/Button';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7h3da4x', 'template_2i4xs8z', form.current, {
        publicKey: 'qC-Cs1P7cVkZQUkY1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact'>
      <div className="frame-contact"><br /> <div className="h1">Contact Us</div><br /> 
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label><br />
          <input type="text" name="from_name" /> <br /><br />
          <label>Email</label> <br />
          <input type="email" name="from_email" /> <br /><br />
          <label>Message</label> <br />
          <textarea name="message" /> <br /><br />
          <Button variant="Submit" input type="submit" >Send</Button>
        </form>
        <br /><br />
      </div> 
    </div>
  );
}

export default Contact