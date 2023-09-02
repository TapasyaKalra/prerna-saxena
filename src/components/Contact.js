import React, {  useState } from 'react'
import '../css/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';
import {useNavigate} from 'react-router-dom'

function Contact() {
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
    emailjs.send('service_rsfn4v6', 'template_aazx6nq', data, 'Mys8uxIrCv4hkzxVU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    alert('Thank You')
    history("/", { replace: true });
  }
  return (
    <>
    <div className='contact m-bottom-100'>
    <div className='container-fluid contact__header'>

    </div>
    <div className="container">
      <div className="row m-top-100">
        <div className="col-12 col-md-6 px-5 border-end"> 
          <p>Work days and timings:<br /><span className="fw-bold">Monday to Friday, 10:00 AM to 06:00 PM IST.</span></p>
          <br/>
          <span className="fw-bold">Contact Details:</span><br />
          <div className='w-100'>
          <a className="btn btn-outline-primary contact-link" target="_blank" rel="noopener noreferrer" href="mailto:therapeuticallyyoursprerna@gmail.com"><FontAwesomeIcon className="text-primary" icon={faEnvelope} size="xl" />&nbsp;therapeuticallyyoursprerna@gmail.com</a>
          </div>
          <br/>
          <p>
          Kindly send in your queries or messages via email or fill in the form. All messages and emails will be answered within 48 work hours.
          </p>
          
          <br /><span className="fw-bold">Follow on Instagram:</span><br />
          <div className='w-100'>
          <a className=" btn btn-outline-primary contact-link" target="_blank" rel="noopener noreferrer" href="https://instagram.com/therapeuticallyyours"><FontAwesomeIcon className="text-primary" icon={faInstagram} size="xl" />&nbsp;@therapeuticallyyours</a>
          </div>
          <br/>  
          <p>
          Follow <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/therapeuticallyyours">@therapeuticallyyours</a> for regular mental health content and work updates.
          </p>
        </div>
        <div className="col-12 col-md-6 px-5">
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
        </div>
      </div>
    </div>
      </div>
      </>
  )
}

export default Contact
