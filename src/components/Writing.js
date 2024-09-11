import React, { useState } from "react";
import "../css/Writing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

function Writing() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const history = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		var date = new Date();
		var today =
			date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

		const data = {
			name: name,
			email: email,
			workSubject: subject,
			message: message,
			date: today,
			subject: "work-with-me-request-form",
		};
		emailjs
			.send(
				"service_rsfn4v6",
				"template_aazx6nq",
				data,
				"Mys8uxIrCv4hkzxVU"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		alert("Thank You");
		history("/", { replace: true });
	};
	return (
		<>
			<div className="newsletter container-fluid ">
				<div className="row justify-content-center">
					<div className="col-md-4 text-center p-0 ">
						<img
							src="/assets/images/p3.JPG"
							alt="newsletter"
							id="newsletter-img"
						/>
					</div>
					<div className="col-md-4 align-self-center p-5">
						<div>
							<h2 className="text-center">Work With Me</h2>
							<p className="text-center">
								To work with me on writing (literature writing,
								content writing), proofreading, research
								assistance or content creation projects, kindly
								drop me a message using the following mediums.
								I'll get in touch with you within 48 work hours.
							</p>
						</div>
						<div className="text-center">
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="btn-community btn btn-light "
								href="mailto:prernasaxena.work@gmail.com"
							>
								<FontAwesomeIcon
									className="insta-button"
									icon={faEnvelope}
									size=""
								/>
								&nbsp;prernasaxena.work@gmail.com
							</a>
						</div>
						<form className="" onSubmit={handleSubmit}>
							<div>
								<label for="name" className="form-label">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									id="name"
									name="name"
									required
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div>
								<label for="email" className="form-label">
									Email
								</label>
								<input
									type="text"
									className="form-control"
									id="email"
									name="email"
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label for="subject" className="form-label">
									Subject
								</label>
								<input
									type="text"
									className="form-control"
									id="subject"
									name="subject"
									required
									onChange={(e) => setSubject(e.target.value)}
								/>
							</div>
							<div>
								<label for="message" className="form-label">
									Message
								</label>
								<textarea
									type="text"
									className="form-control"
									id="message"
									name="message"
									rows={5}
									required
									onChange={(e) => setMessage(e.target.value)}
								/>
							</div>
							<div className="mt-2 text-center">
								<button
									className="btn btn-primary"
									type="submit"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Writing;
