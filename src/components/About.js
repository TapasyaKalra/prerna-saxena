import React,{useEffect} from 'react'
import '../css/About.css'
// import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }) 
  return (
    <div className="about">
      <div className="container-fluid cta">
        <div className="row justify-content-end text-center">      
          {/* <div className="col-12 col-md-6">      
              <span className='fs-5 '>Book therapy at</span>
              <br/>
            <Link className='btn btn-outline-secondary btn-lg fw-bold' to="/therapy">Therapeutically Yours</Link> 
            <br />
            <br />
            <span className='fs-5 '>Subscribe to email newsletter</span><br/>
            <Link className='btn btn-outline-secondary btn-lg fw-bold' to="/contact">Subscribe</Link>
          </div> */}
        </div>
      </div>
      <div className="container ps-4 pe-4">
        <div className="row text-center mt-5 mb-5 justify-content-center">
          <div className="col-10 col-md-6 border rounded p-2">
            <p className = "mb-0">Hi, I'm Prerna Saxena. I'm the founder, psychotherapist and mental health advocate at Therapeutically Yours.</p>
            
          </div>
        </div>
{/* Biography */}
        <div className="row  m-top-100" >
          <h2 className="text-center">Biography</h2>
          <hr  class="heading-underline mx-auto border border-primary border-3 opacity-100" />
        </div>
        <div className="row m-top-50 justify-content-center">
          <div className="col-12 col-md-5 col-lg-4">
            <img className = "p-3 aboutus-img" src="assets/images/p1/p1h1LHS.jpeg" alt="" />
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <img className = "p-3" src="assets/images/p1/p1h1RHS_1.jpg" alt="" />
          </div>
        </div>
        <div className="row m-top-50 justify-content-center">
          <div className="col-lg-10">
            <p>
              I was born and raised in New Delhi, India. My pronouns are she, her, hers. I am passionate about supporting people and seeing change. I am filled with gratitude for the work I get to do through my private online clinic, creating and writing content and other projects I take on. My interest in psychology stems from my experience of continually learning what it means to be human. I decided to take on this professional path when I was 15 years old and every decision I have made since then has been a step closer to where I am today. You can join me on Instagram @therapeuticallyyours, as I try to de-stigmatise mental health and therapy by sharing memes and my thoughts as a therapist and a human.
            </p>
            <p>
              I describe my lifestyle choices under the umbrellas of minimalism, essentialism and holistic wellness. I love  to travel; it helps me to learn and deepen my respect and appreciation about new cultures, meet new people, be inspired, build acceptance for different experiences and expand my view of the world. Travelling or going out by myself helps me in staying grounded and in connection with my authentic self. I feel calm and at peace amidst nature and on rainy days. Eating good food, spending time with my loved ones and holding a dog, make me happy. I approach life with a sense of humour and enjoy making people laugh. I like listening to music, dancing, singing, reading, writing and watching good content. I am bilingual (English and Hindi) and am currently learning the Korean language after being fascinated by the food, culture and people of South Korea.
            </p>
          </div>
          
        </div>
{/* Theoretical Orientation */}
        <div className="row m-top-100 " >
          <h2 className="text-center">Theoretical Orientation</h2>
          <hr  class="heading-underline mx-auto border border-primary border-3 opacity-100" />
        </div>
        <div className="row m-top-50 justify-content-center">
          <div className="col-12 col-md-5 col-lg-4">
            <img className = "p-3 aboutus-img" src="assets/images/p1/p1h2LHS.jpg" alt="" />
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <img className = "p-3" src="assets/images/p1/p1h2RHS.jpeg" alt="" />
          </div>
        </div>
        <div className="row m-top-50 justify-content-center">
          <div className="col-lg-10">
            <p>
              As a trauma-informed clinician, I believe in doing the deep work in therapy. My approach in therapy is eclectic, holistic and collaborative. My therapeutic alliance is grounded in openness, respect, honesty, trust and humour. I consciously work towards providing safe, non-judgemental and free space to my clients. My aim is to help my clients feel empowered, live freely and authentically, thrive in their relationships with themselves and others, experience healing and change, and uncover their purpose in life. I appreciate and value the uniqueness, in characteristics and life journeys, that each client brings in with them. I honour the courage and vulnerability it takes to ask for help; to look within and embrace ourselves. I feel gratitude towards my clients for inviting me to work alongside them in their healing journey and to provide support as they encounter various challenges and transitions in life.
            </p>
          </div>   
        </div>
{/* Education + Experience */}
        <div className="row m-top-100" >
          <h2 className="text-center">Education + Experience</h2>
          <hr  className="heading-underline mx-auto border border-primary border-3 opacity-100" />
        </div>
        <div className="row m-top-50 justify-content-center">
          <div className="col-12 col-md-5 col-lg-4">
            <img className = "p-3 aboutus-img" src="assets/images/p1/p1h3LHS.jpeg" alt="" />
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <img className = "p-3" src="assets/images/p1/p1h3RHS.jpeg" alt="" />
          </div>
        </div>
        <div className="row m-top-50 justify-content-center">
          <div className="col-12 col-lg-10 text-center  ">
            <p>My relevant qualifications and experiences are listed below.</p>
          </div>
        </div>
        <div className="row m-top-50 justify-content-center">      
          <div className="col-12 col-lg-5">
            <div className="card">
              <div className="card-header fw-bold">Education</div>
              <div className="card-body">
                <ul>
                  <li>Degrees:</li>
                    <ul>
                    <li>Master of Science in Clinical and Health Psychology (United Kingdom)</li>
                    <li>Bachelor of Arts in Psychology (India)</li>
                  </ul>
                  <li>Diplomas:</li>
                    <ul>
                    <li>Relationship Counselling (CTAA accredited)</li>
                    <li>Clinical Hypnotherapy (AHA accredited)</li>
                    </ul>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Certificates
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" disabled className="text-dark">QPR GateKeeper Training for Suicide Prevention</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" disabled className="text-dark">Applying Systems Psychodynamics: <br/>Enhancing Organisational Diagnosis</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" disabled className="text-dark">Identifying and Treating Pathological Narcissism</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" disabled className="text-dark">Developmental Psychoanalysis</Dropdown.Item>
                        <Dropdown.Item href="#/action-5" disabled className="text-dark">Introduction to Psychoanalytic Trauma Theory</Dropdown.Item>
                        <Dropdown.Item href="#/action-6" disabled className="text-dark">Psychoanalysis</Dropdown.Item>
                        <Dropdown.Item href="#/action-7" disabled className="text-dark">Advances in Neuropsychology</Dropdown.Item>
                        <Dropdown.Item href="#/action-8" disabled className="text-dark">Therapeutic Counselling</Dropdown.Item>
                        <Dropdown.Item href="#/action-9" disabled className="text-dark">Cognitive Behavioural Therapy</Dropdown.Item>
                        <Dropdown.Item href="#/action-10" disabled className="text-dark">Dialectical Behavioural Therapy</Dropdown.Item>
                        <Dropdown.Item href="#/action-11" disabled className="text-dark">School Mental Health</Dropdown.Item>
                        <Dropdown.Item href="#/action-12" disabled className="text-dark">Identification and Assessment of <br/>Specific Learning Disability</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Additional Credentials
                      </Dropdown.Toggle>

                      <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1" disabled className="text-dark">Master's Certificate in Digital Marketing</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" disabled className="text-dark">Certification in Graphology</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 ">
            <div className="card">
              <div className="card-header fw-bold">Experience</div>
              <div className="card-body">
                <ul>
                  <li>Current Profiles:
                    <ul>
                    <li>Founder and Psychotherapist at Therapeutically Yours</li>
                    <li>Mental Health Advocate</li>
                    </ul>
                  </li>
                  <li>Awards or Recognition:
                    <ul>
                      <li>by Delhi Police</li>
                      <li>by UNICEF India</li>
                    </ul>
                  </li>
                  <li>
                  <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Professional Memeberships
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" disabled className="text-dark">Counsellors Council of India (CCI)</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" disabled className="text-dark">National Mental Health Council <br/>by Women's Indian Chamber of Commerce and Industry<br/>(WICCI NMHC)</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" disabled className="text-dark">All Ladies League (ALL)</Dropdown.Item>
                        
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  
                  <li>
                  <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Past experience
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" disabled className="text-dark">Work Settings:<br/>corporate, hospital, schools, NGOs, online platforms</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" disabled className="text-dark">Profiles:<br/>therapist, counsellor, researcher,<br/>resource developer for children with special needs, <br/> trainer, social worker, educator, writer, content creator, <br/>social media consultant,organiser, team lead <br/>and volunteer etc.</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" disabled className="text-dark">Client base:<br/>diversity in age, gender, ethnicity, financial background, <br/>occupation etc</Dropdown.Item>
                        
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About
