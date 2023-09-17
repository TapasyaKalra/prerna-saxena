import React, { useEffect } from "react";
import "../css/About.css";
// import { Link } from 'react-router-dom'
// import Dropdown from "react-bootstrap/Dropdown";

function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<div className="about">
			{/* cover image */}
			<div className="container-fluid cta">
				<div className="row justify-content-end text-center"></div>
			</div>
			{/* content */}
			<div className="container ps-4 pe-4">
				{/* notice box */}
				<div className="row text-center mt-5 mb-5 justify-content-center">
					<div className="col-10 col-md-6 border border-dark rounded p-2">
						<p className="mb-0 fw-bold">
							Hi, I'm Prerna Saxena. I'm the founder,
							psychotherapist and mental health advocate at
							Therapeutically Yours.
						</p>
					</div>
				</div>
				{/* Biography */}
				<div className="row  m-top-100">
					<h2 className="text-center">biography</h2>
					<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
				</div>
				<div className="row m-top-50 justify-content-center">
					<div className="col-12 col-md-5 align-self-center  order-1 order-lg-1 align-self-center">
						<p>
							I was born and raised in New Delhi, India. My
							pronouns are she, her, hers. I am a solopreneur who
							is passionate about supporting people and seeing
							change, and I am filled with gratitude for the work
							I get to do everyday.
						</p>{" "}
						<p>
							My interest in psychology stems from my purpose in
							life, my experience of navigating through life and
							relationships with others and myself, and
							continually learning what it means to be human.
						</p>
						<p>
							I provide mental health support to south asians
							globally through various mental health services at
							Therapeutically Yours, my online private practice. I
							am also a mental health practitioner, consultant,
							writer, content creator and volunteer outside of my
							practice.
						</p>
					</div>
					<div className="col-12 col-md-5  order-3 order-lg-2 align-self-center">
						<img src="assets\images\about\biography1.JPG" alt="" />
					</div>
					<div className="col-12 col-md-5 align-self-center order-2 order-lg-3 ">
						<p>
							I live a minimalist and essentialist lifestyle. I
							love to travel; it helps me to expand my worldview
							by learning, being inspired, and deepening my
							respect and appreciation for different cultures. It
							keeps me grounded and in connection with my
							authentic self. I feel calm and at peace amidst
							nature and on rainy days.
						</p>{" "}
						<p>
							I approach life with a sense of humour and enjoy
							making people laugh. My interests include
							photography, cinematography, music, dance, art,
							languages, and learning new things.
						</p>
					</div>
					<div className="col-12 col-md-5 order-4 order-lg-4 m-top-50 align-self-center">
						<img src="assets\images\about\biography2.jpeg" alt="" />
					</div>
				</div>
				{/* Theoretical Orientation */}
				<div className="row m-top-100 ">
					<h2 className="text-center">
						education + theoretical orientation
					</h2>
					<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
				</div>
				<div className="row m-top-50 justify-content-center">
					<div className="col-12 col-md-5  order-3 order-lg-1 align-self-center">
						<img src="assets\images\about\education.jpeg" alt="" />
					</div>
					<div className="col-12 col-md-5 align-self-center  order-1 order-lg-2">
						<p>
							I hold a Master of Science degree in Clinical and
							Health Psychology (United Kingdom), and Bachelor of
							Arts degree in Psychology (India). I have diplomas
							in Relationship Counselling (CTAA accredited), and
							Clinical Hypnotherapy (AHA accredited). I also hold
							additional credentials in QPR GateKeeper Training
							for Suicide Prevention, Therapeutic Counselling,
							Psychoanalysis, Neuropsychology; and Master's
							Certificate in Digital Marketing, Certification in
							Graphology and many more. I have received awards or
							recognition from the Delhi Police and UNICEF India
							for volunteer services. change, and I am filled with
							gratitude for the work I get to do everyday.
						</p>
					</div>
					<div className="col-12 col-md-5 order-4 order-lg-3 m-top-50 align-self-center">
						<img
							src="assets\images\about\orientation.jpeg"
							alt=""
						/>
					</div>
					<div className="col-12 col-md-5 align-self-center order-2 order-lg-4 ">
						<p>
							As a trauma-informed clinician, I believe in doing
							deep work in therapy. My approach in therapy is
							eclectic, holistic and collaborative. My therapeutic
							alliance is grounded in openness, respect, honesty,
							trust and humour. I consciously work towards
							providing safe, non-judgemental and free space to my
							clients. My aim is to help my clients feel
							empowered, live freely and authentically, thrive in
							their relationships with themselves and others,
							experience healing and change, and uncover their
							purpose in life.
						</p>
					</div>
					<div className="col-12 col-md-10 order-5 m-top-50">
						<p>
							I appreciate and value the uniqueness, in
							characteristics and life journeys, that each client
							brings in with them. I honour the courage and
							vulnerability it takes to ask for help; to look
							within and embrace ourselves. I feel gratitude
							towards my clients for inviting me to work alongside
							them in their healing journey and to provide support
							as they encounter various challenges and transitions
							in life.
						</p>
					</div>
				</div>
				{/* Notice Board */}
				<div className="row text-center mt-5 mb-5 justify-content-center">
					<div className="col-12 col-md-10 border border-dark rounded p-3">
						<p className="mb-0 fw-bold">
							You can sign up for your preferred services from the
							respective pages on this website.
						</p>
						<p>
							To connect with me for collaborations or paid
							projects on mental health services, content
							creation, writing (non-fiction, fiction, articles,
							columns etc.) and more, kindly send me an email at
							therapeuticallyyoursprerna@gmail.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
