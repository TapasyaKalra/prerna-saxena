import React, { useState } from "react";
import "../css/Testimonials.css";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import TestimonialCarousel from "./TestimonialCarousel";

function Testimonials() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const history = useNavigate();
	const addTestimonial = async (message, name, email, today) => {
		try {
			const docRef = await addDoc(collection(db, "testimonials-saved"), {
				message: message,
				name: name,
				email: email,
				date: today,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		var date = new Date();
		var today =
			date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

		addTestimonial(message, name, email, today);

		const data = {
			name: name,
			email: email,
			message: message,
			date: today,
			subject: "testimonial",
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
			<div className="container m-top-100 m-bottom-100">
				<div className="row">
					<h2 className="fw-bold text-center">
						Here's what clients at Therapeutically Yours and my
						fellow professionals have to say…
					</h2>
					<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
				</div>
			</div>
			{/* client testimonials */}
			<div className="container">
				<div className="row ">
					<h3 className="fw-bold"> testimonials by clients:</h3>
				</div>
			</div>
			<div className="container-fluid testimonials m-bottom-100 m-top-50">
				<div className="row justify-content-center">
					<div className="col-12 px-0 ">
						<TestimonialCarousel type="client" />
					</div>
				</div>
			</div>
			{/* colleagues testimonials */}
			<div className="container">
				<div className="row ">
					<h3 className="fw-bold"> testimonials by colleagues:</h3>
				</div>
			</div>
			<div className="container-fluid testimonials m-top-50 m-bottom-100">
				<div className="row justify-content-center">
					<div className="col-12 px-0 ">
						<TestimonialCarousel type="colleague" />
					</div>
				</div>
			</div>
			{/* write a testimonial */}
			<div className="container">
				<div className="row m-top-100">
					<h3 className="fw-bold text-center">write a testimonial</h3>
					<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
				</div>
				<div className="row m-top-50">
					<div className="col-12 col-md-6 px-5 border-end">
						<p>
							If you're a client who has been in the therapeutic
							process with me, or a colleague who has worked
							together in any professional capacity, please leave
							a testimonial in the box. I'll be happy to hear from
							you. Disclaimer: Name and email address is only
							being asked for my knowledge. I respect your privacy
							and promise to maintain it. When the testimonial is
							shared on the website, social media or any other
							platform for professional purposes, your name will
							always remain anonymous.
						</p>
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
									onChange={(e) => setName(e.target.value)}
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
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label for="testimonial" className="form-label">
									Testimonial
								</label>
								<textarea
									name="message"
									id="message"
									rows="7"
									className="form-control"
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

export default Testimonials;
