import React from "react";
import "../css/Testimonials.css";
// import emailjs from "emailjs-com";
// import { useNavigate } from "react-router-dom";
// import { db } from "../firebase";
// import { addDoc, collection } from "firebase/firestore";
import TestimonialCarousel from "./TestimonialCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Testimonials() {
	// const [name, setName] = useState("");
	// const [email, setEmail] = useState("");
	// const [message, setMessage] = useState("");
	// const history = useNavigate();
	// const addTestimonial = async (message, name, email, today) => {
	// 	try {
	// 		const docRef = await addDoc(collection(db, "testimonials-saved"), {
	// 			message: message,
	// 			name: name,
	// 			email: email,
	// 			date: today,
	// 		});
	// 		console.log("Document written with ID: ", docRef.id);
	// 	} catch (e) {
	// 		console.error("Error adding document: ", e);
	// 	}
	// };
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	var date = new Date();
	// 	var today =
	// 		date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

	// 	addTestimonial(message, name, email, today);

	// 	const data = {
	// 		name: name,
	// 		email: email,
	// 		message: message,
	// 		date: today,
	// 		subject: "testimonial",
	// 	};
	// 	emailjs
	// 		.send(
	// 			"service_rsfn4v6",
	// 			"template_aazx6nq",
	// 			data,
	// 			"Mys8uxIrCv4hkzxVU"
	// 		)
	// 		.then(
	// 			(result) => {
	// 				console.log(result.text);
	// 			},
	// 			(error) => {
	// 				console.log(error.text);
	// 			}
	// 		);
	// 	alert("Thank You");
	// 	history("/", { replace: true });
	// };
	return (
		<>
			<div className="testimonials">
				<div className="container">
					<div className="row  m-top-100">
						<h2 className="text-center">testimonials</h2>
						<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
					</div>
				</div>
				{/* client testimonials */}
				<div className="container-fluid testimonials m-bottom-100 m-top-50">
					<div className="row justify-content-center">
						<div className="col-12 px-0 ">
							<TestimonialCarousel type="client" />
						</div>
					</div>
				</div>
				{/* colleagues testimonials
				<div className="container">
					<div className="row text-center">
						<p className="fw-bold"> testimonials by colleagues:</p>
					</div>
				</div>
				<div className="container-fluid testimonials m-top-50 m-bottom-100">
					<div className="row justify-content-center">
						<div className="col-12 px-0 ">
							<TestimonialCarousel type="colleague" />
						</div>
					</div>
				</div> */}
				{/* 
				write a testimonial 
				<div className="container">
					<div className="row m-top-100">
						<h3 className="fw-bold text-center">
							write a testimonial
						</h3>
						<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
					</div>
					<div className="row m-top-50">
						<div className="col-12 col-md-6 px-5 border-end">
							<p>
								If you're a client who has been in the
								therapeutic process with me, or a colleague who
								has worked together in any professional
								capacity, please leave a testimonial in the box.
								I'll be happy to hear from you.
							</p>
							<p>
								Disclaimer: Name and email address is only being
								asked for my knowledge. I respect your privacy
								and promise to maintain it. When the testimonial
								is shared on the website, social media or any
								other platform for professional purposes, your
								name will always remain anonymous.
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
									<label
										for="testimonial"
										className="form-label"
									>
										Testimonial
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
				 */}
				<div className="container">
					{" "}
					<div className="row m-top-100 ">
						<h2 className="text-center">
							Frequently Asked Questions
						</h2>
						<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
					</div>
				</div>

				<div className="container-fluid bg-primary py-5 m-top-50 m-bottom-100">
					<div className="row justify-content-center mb-4">
						<div className="col-12 col-md-10 text-center ">
							<p className="m-0">
								How would I know if I need therapy?
							</p>
							<p className="m-0">
								What happens in the therapeutic process?
							</p>
							<p className="m-0">What can I expect?</p>
							<p className="m-0">How long does therapy last?</p>
						</div>
					</div>
					<div className="row justify-content-center ">
						<div className="col-12 text-center ">
							<p>
								Answers to all the questions mentioned here and
								many more questions
								<br /> can be found in this free Instagram Guide
							</p>
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
			</div>
		</>
	);
}

export default Testimonials;
