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
					&nbsp;
					<div className="col-12">
						<h2 id="education-qualifications" className="fw-bold">
							education qualifications
						</h2>
					</div>
					<div className="row  justify-content-center dropdown">
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
													href: "#/nested-action-1",
												},
												{
													title: "Diploma, Clinical Hypnotherapy (AHA accredited)",
													href: "#/nested-action-2",
												},
												{
													title: "Advances in Neuropsychology",
													href: "#/nested-action-3",
												},
												{
													title: "Cognitive Behavioral Therapy",
													href: "#/nested-action-4",
												},
												{
													title: "Developmental Psychoanalysis",
													href: "#/nested-action-5",
												},
												{
													title: "Dialectical Behavioral Therapy",
													href: "#/nested-action-6",
												},
												{
													title: "Expressive Arts Therapy",
													href: "#/nested-action-7",
												},
												{
													title: "Gatekeeper Training For Suicide Prevention",
													href: "#/nested-action-8",
												},
												{
													title: "Identification and Assessment of SLD",
													href: "#/nested-action-9",
												},
												{
													title: "Identifying and Treating Pathological Narcissism",
													href: "#/nested-action-10",
												},
												{
													title: "Introduction To Psychoanalytic Trauma Theory",
													href: "#/nested-action-11",
												},
												{
													title: "Introduction To Schizophrenia",
													href: "#/nested-action-12",
												},
												{
													title: "Introductory Psychoanalysis",
													href: "#/nested-action-13",
												},
												{
													title: "Linking Field Theory to Systems Psychodynamics",
													href: "#/nested-action-14",
												},
												{
													title: "School Mental Health",
													href: "#/nested-action-15",
												},
												{
													title: "Therapeutic Counselling",
													href: "#/nested-action-16",
												},
											].map((item, index) => (
												<Dropdown.Item
													key={index}
													href={item.href}
												>
													{item.title}
												</Dropdown.Item>
											))}
										</Dropdown.Menu>
									</Dropdown>
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
										<Dropdown.Item
											key={index}
											href={item.href}
										>
											{item.title}
										</Dropdown.Item>
									))}
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>
				</div>
				{/* Contact */}
				<div className="row m-top-50 justify-content-center">
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="btn-community btn btn-light col-3 "
						href="https://instagram.com/therapeuticallyyours"
					>
						<FontAwesomeIcon
							className="insta-button"
							icon={faInstagram}
							size="lg"
						/>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="btn-community btn btn-light  col-3 "
						href="mailto:prernasaxena.work@gmail.com"
					>
						<FontAwesomeIcon
							className="mail"
							icon={faEnvelope}
							size="lg"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default About;
