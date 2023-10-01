import React, { useState } from "react";
import "../css/Newsletter.css";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

function Newsletter() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const history = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		var date = new Date();
		var today =
			date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

		const data = {
			name: name,
			email: email,
			date: today,
			subject: "newsletter-form",
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
							<h2 className="text-center">
								Let's stay in touch!
							</h2>
							<p className="text-center">
								Sign up with your email address to receive free
								monthly content and updates.
							</p>
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
							<br />
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
									onChange={(e) => setEmail(e.target.value)}
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

export default Newsletter;
