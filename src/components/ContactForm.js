import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com';

function ContactForm() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const history = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    var date = new Date()
    var today = date.getDate()+ "-" + date.getMonth() +"-" + date.getFullYear()
    
    const data={
      name:name,
      email: email,
      message: message,
      date: today,
      subject: 'contact-form'
    }
    emailjs.send('service_oct1hjp', 'template_jpat9wi', data, 'Kcux1VYvqoaedA6Sq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    alert('Thank You')
    history("/", { replace: true });
  }
  return (
    <form onSubmit={handleSubmit}>
            <div>
              <label for="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name='name' required onChange = {e => setName(e.target.value)} />
            </div>
            <div>
              <label for="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" required onChange = {e => setEmail(e.target.value)} />
            </div>
            <div>
              <label for="message" className="form-label">Message</label>
              <textarea name="message" id="message" rows="7" className="form-control" required onChange = {e => setMessage(e.target.value)} />
            </div>
            <div className="mt-2 text-center">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
  )
}

export default ContactForm
