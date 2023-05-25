import React from 'react'
import "./FormStyles.css"

const Form = () => {
  return (
    <div className="form">
        <label>Your Name</label>
        <input type="text" className="form-control" name="name" id="name" aria-describedby="helpId" placeholder="Enter Your Name"/>
        
        <label>Email</label>
        <input type="email" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter Email Address"/>
        
        <label>Subject</label>
        <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Write Subject for Contacting"/>
        
        <label>Message</label>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>

        <button type="submit" className="btn">Submit</button>
    </div>
  )
}

export default Form