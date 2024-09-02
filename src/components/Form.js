import React from 'react'
import "./FormStyles.css"

const Form = () => {
  const [input, setInput] = React.useState({});
  const handeChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({...input, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form Submitted")
    console.log(input)
    e.target.reset();
  }
  
  return (
    <form className="form" onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input onChange={handeChange} type="text" className="form-control" name="name" id="name" aria-describedby="helpId" placeholder="Enter Your Name"/>
        
        <label>Email</label>
        <input onChange={handeChange} type="email" className="form-control" name="email" id="" aria-describedby="helpId" placeholder="Enter Email Address"/>
        
        <label>Subject</label>
        <input onChange={handeChange} type="text" className="form-control" name="subject" id="" aria-describedby="helpId" placeholder="Write Subject for Contacting"/>
        
        <label>Message</label>
        <textarea name="message" onChange={handeChange} id="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>

        <button type="submit" name="submit" className="btn">Submit</button>
    </form>
  )
}

export default Form