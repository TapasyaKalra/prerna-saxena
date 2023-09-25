import React, { useState } from "react";
import "../css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
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
			message: message,
			date: today,
			subject: "contact-form",
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
			<div className="contact m-bottom-100">
				<div className="container-fluid contact__header"></div>
				<div className="container">
					<div className="row m-top-100">
						<div className="col-12 col-md-6 px-5 border-end">
							<div className="border rounded border-dark p-3 text-center">
								<p>Work days and timings:</p>
								<span className="fw-bold">
									Monday to Friday, 10:00 AM to 06:00 PM IST.
								</span>
							</div>

							<br />
							<span className="fw-bold">Contact Details:</span>
							<br />
							<div className="w-100">
								<a
									className="btn btn-outline-primary contact-link w-100"
									target="_blank"
									rel="noopener noreferrer"
									href="mailto:therapeuticallyyoursprerna@gmail.com"
								>
									<FontAwesomeIcon
										className="text-primary"
										icon={faEnvelope}
										size="xl"
									/>
									&nbsp;therapeuticallyyoursprerna@gmail.com
								</a>
							</div>
							<div className="w-100">
								<a
									className=" btn btn-outline-primary contact-link w-100"
									target="_blank"
									rel="noopener noreferrer"
									href="https://instagram.com/therapeuticallyyours"
								>
									<FontAwesomeIcon
										className="text-primary"
										icon={faInstagram}
										size="xl"
									/>
									&nbsp;@therapeuticallyyours
								</a>
							</div>
							<div className="w-100">
								<a
									className=" btn btn-outline-primary contact-link w-100"
									target="_blank"
									rel="noopener noreferrer"
									href="https://medium.com/@therapeuticallyyours"
								>
									<FontAwesomeIcon
										className="text-primary hover"
										icon={faMedium}
										size="xl"
									/>
									&nbsp;@therapeuticallyyours
								</a>
							</div>
							<br />
							<p>
								If you have any further questions, or are
								inquiring about a collaboration, send me a quick
								message or drop an email. All messages and
								emails will be answered within 48 work hours.
							</p>
							<p>I look forward to hearing from you!</p>
							<br />
							<br />

							<br />
						</div>
						<div className="col-12 col-md-6 px-5">
							<form onSubmit={handleSubmit}>
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
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</div>
								<div>
									<label for="email" className="form-label">
										Email
									</label>
									<input
										type="email"
										className="form-control"
										id="email"
										name="email"
										required
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<div>
									<label for="message" className="form-label">
										Message
									</label>
									<textarea
										name="message"
										id="message"
										rows="7"
										className="form-control"
										required
										onChange={(e) =>
											setMessage(e.target.value)
										}
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
			</div>
		</>
	);
}

export default Contact;
