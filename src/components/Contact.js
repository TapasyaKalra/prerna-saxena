import React, { useState } from "react";
import "../css/Contact.css";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

function Contact() {
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
			message: message,
			date: today,
			subject: subject,
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
			<div className="contact ">
				<div className="container">
					<div className="row m-top-50 mx-auto">
						<div className="col-12 col-md-6 p-2 text-center mb-5 align-self-center">
							<img
								className="contact-img"
								src="assets/images/contact.jpg"
								alt="individual-therapy"
							/>
						</div>
						<div className="col-12 col-md-6 align-self-center p-5">
							<div className="">
								<h2 className="text-center">
									Let's work together!
								</h2>
								<br />
								<p>
									To work with me or collaborate, kindly drop
									me a message below. I'll get in touch with
									you within 48 work hours.
								</p>
							</div>
							<div>
								<form onSubmit={handleSubmit}>
									<div>
										<label
											for="name"
											className="form-label"
										>
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
										<label
											for="email"
											className="form-label"
										>
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
										<label
											for="subject"
											className="form-label"
										>
											Subject
										</label>
										<input
											type="subject"
											className="form-control"
											id="subject"
											name="subject"
											required
											onChange={(e) =>
												setSubject(e.target.value)
											}
										/>
									</div>
									<div>
										<label
											for="message"
											className="form-label"
										>
											Message
										</label>
										<textarea
											name="message"
											id="message"
											rows="6"
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
							<div className="mt-2 text-center">
								<a
									className="btn btn-primary"
									href="//linktr.ee/therapeuticallyyours"
									target="_blank"
									rel="noopener noreferrer"
								>
									all links here
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
