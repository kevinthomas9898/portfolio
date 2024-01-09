import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import "./FormStyles.css"

const Form = () => {
  const [formState, setFormState] = useState({
    user_name: '',
    user_email: '',
    user_subject: '',
    message: ''
  });

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_chhi72j', 'template_11dftdc', formRef.current, '0vo29OdU1csAVeRSO')
      .then((result) => {
          alert("email sent successfully");
          setFormState({ // Reset form fields after successful submission
            user_name: '',
            user_email: '',
            user_subject: '',
            message: ''
          });
      }, (error) => {
          alert(error.text);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="form">
        <label>Your Name</label>
        <input type="text" className="form-control" name="user_name" id='user_name' value={formState.user_name} onChange={handleChange} placeholder="Enter Your Name"/>
        
        <label>Email</label>
        <input type="email" className="form-control" name="user_email" id='user_email' value={formState.user_email} onChange={handleChange} placeholder="Enter Email Address"/>
        
        <label>Subject</label>
        <input type="text" className="form-control" name="user_subject" id='user_subject' value={formState.user_subject} onChange={handleChange} placeholder="Write Subject for Contacting"/>
        
        <label>Message</label>
        <textarea name="message" value={formState.message} onChange={handleChange} id="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>

        <button type="submit" className="btn">Submit</button>
    </form>
  )
}

export default Form;
