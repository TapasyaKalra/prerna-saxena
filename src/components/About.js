import React, { useEffect } from "react";
import "../css/About.css";
// import { Link } from 'react-router-dom'
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
				{/* Biography */}
				{/* <div className="row  m-top-100">
					<h2 className="text-center">biography</h2>
					<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
				</div> */}
				<div className="row m-top-100 justify-content-center">
					<div className="col-12">
						<p>
							Hi, I am Prerna, a psychotherapist providing mental
							health support to South Asians globally. My pronouns
							are she, her, hers.
						</p>{" "}
						<p>
							My interest in psychology stems from my curiosity
							about how the human mind and body function and what
							makes people who they are. I decided to become a
							therapist at a young age, as I determined that my
							purpose in life is to support people. I am
							passionate about facilitating change and advocating
							for mental health. I create content on Instagram
							related to mental health, therapy, self-exploration,
							relationships, life as we know it, and more.
						</p>
						<p>
							I was born and live in New Delhi, India. I lead a
							minimalist and essentialist lifestyle. I approach
							life with a sense of humour and like making people
							laugh. Travelling, nature, rain and food are some of
							my go-to healing anchors, in addition to the work I
							put into my life. I carry my kindle (almost)
							everywhere and enjoy learning about different
							cultures, and the world.
						</p>
					</div>
				</div>
				{/* Theoretical Orientation */}
				<div className="row m-top-100 ">
					<h2 className="text-center">education qualifications</h2>
					<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
				</div>
				<div className="row m-top-50 justify-content-center">
					<div className="col-12">
						<Dropdown>
							<Dropdown.Toggle
								variant="primary"
								id="dropdown-basic"
							>
								PSYCHOLOGY
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">
									Master of Science, Clinical and Health
									Psychology (United Kingdom)
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2">
									Bachelor of Arts, Psychology (India)
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="col-12">
						<Dropdown>
							<Dropdown.Toggle
								variant="primary"
								id="dropdown-basic"
							>
								Courses
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{[
									{
										title: "Diploma, Relationship Counselling (CTAA accredited)",
										href: "#/action-1",
									},
									{
										title: "Diploma, Clinical Hypnotherapy (AHA accredited)",
										href: "#/action-2",
									},
									{
										title: "Advances in Neuropsychology",
										href: "#/action-3",
									},
									{
										title: "Cognitive Behavioral Therapy",
										href: "#/action-4",
									},
									{
										title: "Developmental Psychoanalysis",
										href: "#/action-5",
									},
									{
										title: "Dialectical Behavioral Therapy",
										href: "#/action-6",
									},
									{
										title: "Expressive Arts Therapy",
										href: "#/action-7",
									},
									{
										title: "Gatekeeper Training For Suicide Prevention",
										href: "#/action-8",
									},
									{
										title: "Identification and Assessment of SLD",
										href: "#/action-9",
									},
									{
										title: "Identifying and Treating Pathological Narcissism",
										href: "#/action-10",
									},
									{
										title: "Introduction To Psychoanalytic Trauma Theory",
										href: "#/action-11",
									},
									{
										title: "Introduction To Schizophrenia",
										href: "#/action-12",
									},
									{
										title: "Introductory Psychoanalysis",
										href: "#/action-13",
									},
									{
										title: "Linking Field Theory to Systems Psychodynamics",
										href: "#/action-14",
									},
									{
										title: "School Mental Health",
										href: "#/action-15",
									},
									{
										title: "Therapeutic Counselling",
										href: "#/action-16",
									},
								].map((item, index) => (
									<Dropdown.Item key={index} href={item.href}>
										{item.title}
									</Dropdown.Item>
								))}
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="col-12">
						<Dropdown>
							<Dropdown.Toggle
								variant="primary"
								id="dropdown-basic"
							>
								MISCELLANEOUS
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{[
									{
										title: "Master's Certificate, Digital Marketing",
										href: "#/action-1",
									},
									{
										title: "Certificate, Handwriting and Signature Analysis",
										href: "#/action-2",
									},
								].map((item, index) => (
									<Dropdown.Item key={index} href={item.href}>
										{item.title}
									</Dropdown.Item>
								))}
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
				{/* Contact */}
				<div className="row m-top-50">
					<div className="text-center">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="btn-community btn btn-light "
							href="https://instagram.com/therapeuticallyyours"
						>
							<FontAwesomeIcon
								className="insta-button"
								icon={faInstagram}
								size=""
							/>
							&nbsp;All Things Therapy
						</a>
					</div>
					<div className="text-center">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="btn-community btn btn-light "
							href="mailto:prernasaxena.work@gmail.com"
						>
							<FontAwesomeIcon
								className="mail"
								icon={faEnvelope}
							/>
							&nbsp; prernasaxena.work@gmail.com
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
