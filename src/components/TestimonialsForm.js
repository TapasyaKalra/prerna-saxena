
import React,{useState} from 'react'
import '../css/Testimonials.css'
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase';
import {  addDoc,collection  } from "firebase/firestore"; 
function TestimonialsForm() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const history = useNavigate()
  
  const addTestimonial = async (message,name,email,today) => {
    try {
      const docRef = await addDoc(collection(db, "testimonials-saved"), {
        message: message,
        name: name,
        email: email,
        date:today
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
};
  const handleSubmit = (event) => {
    event.preventDefault();
    var date = new Date()
    var today = date.getDate()+ "-" + date.getMonth() +"-" + date.getFullYear()

    addTestimonial (message,name,email,today)

    const data={
      name:name,
      email: email,
      message: message,
      date: today,
      subject: 'testimonial'
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
      <div className="container m-bottom-100">
        <div className="row m-top-50">
          <div className="col-12 col-md-6 px-5 border-end">
            <p>Testimonials help us in our professional journey and it always warms our hearts to see a happy client.</p>
            <p>If you've been in the therapeutic process with me, please leave a testimonial in the box.</p>
            <p>I will go first: I honour the courage and vulnerability it takes to ask for help; to look within and embrace ourselves. I feel gratitude towards my clients for inviting me to work alongside them in their healing journey and to provide support as they encounter various challenges and transitions in life.</p>
            <p>Disclaimer: Name and email address is only being asked for my knowledge. I respect your privacy and promise to maintain it. At any point of time if the testimonial is shared on the website, social media or any other platform for professional purposes, your name will always be marked as 'Client' as seen above.</p>
            <p>
              Looking forward to reading your responses.
            </p>


          </div>
          <div className="col-12 col-md-6 px-5">
            <form onSubmit={handleSubmit}>
              <div>
                <label for="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" required onChange= {e => setName(e.target.value)} />
              </div>
              <div>
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" required onChange= {e => setEmail(e.target.value)}/>
              </div>
              <div>
                <label for="testimonial" className="form-label">Testimonial</label>
                <textarea name="message" id="message" rows="7" className="form-control" required onChange= {e => setMessage(e.target.value)}/>
              </div>
              <div className="mt-2 text-center">
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </>
    
  )
}

export default TestimonialsForm
