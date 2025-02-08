import React from "react";
import "../css/Therapy.css";
import TestimonialCarousel from "./TestimonialCarousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "../css/Testimonials.css";
function Therapy() {
	return (
		<>
			<div className="therapy">
				<div className="container">
					{/* heading */}
					<div className="row m-top-100 w-75 mx-auto">
						<h2 className="text-center">
							Welcome to Therapeutically Yours.
						</h2>
						<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
					</div>
					{/* intro */}
					<div className="row m-top-50 text-center">
						<p>
							Therapeutically Yours is my private practice through
							which I provide mental health support to South
							Asians globally.
						</p>
						<p>
							I created the name &quot;Therapeutically Yours&quot;
							because it resembles a sign-off or signature at the
							end of a letter. This evokes a sense of warmth and
							connection, reflecting my commitment to providing
							supportive mental health care.
						</p>
					</div>
					<div className="row m-top-50">
						<div className="col mx-auto text-center">
							<img
								className=""
								src="assets/images/therapy.jpeg"
								alt="therapy"
							/>
						</div>
					</div>
					{/* Theoretical Orientation */}
					<div className="row m-top-100">
						<h2 className="text-center">Theoretical Orientation</h2>
						<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
					</div>
					<div className="row m-top-50">
						<div className="col-12">
							<p>
								As a trauma-informed clinician, I believe in
								doing deep work in therapy. My approach is
								eclectic, holistic, and collaborative. My
								therapeutic alliance is grounded in openness,
								respect, honesty, trust, and humour. I
								consciously work towards providing a safe, non-
								judgmental space for my clients. My aim is to
								help them feel empowered, live freely and
								authentically, thrive in their relationships
								with themselves and others, experience healing
								and change, and uncover their purpose in life. I
								appreciate and value the uniqueness of each
								client's characteristics and life journey that
								they bring with them. I honour the courage and
								vulnerability it takes to ask for help, to look
								within, and to embrace ourselves. I feel
								gratitude towards my clients for inviting me to
								work alongside them in their healing journey and
								for allowing me to provide support as they
								encounter various challenges and transitions in
								life.
							</p>
						</div>
					</div>

					{/* notice board */}
					<div className="row m-top-50 text-center border rounded border-dark mx-auto p-4 ">
						<p>
							Please fill in the form for your preferred modality
							below. I'll reach out to you via email or WhatsApp
							within 48 work hours.
						</p>
						<p>
							Kindly email any queries at
							therapeuticallyyoursprerna@gmail.com
						</p>
						<p className="fw-bold">
							Please note: Session appointments need prior
							booking.
						</p>
					</div>
					{/* therapy forms */}
					<div className="row m-top-100 justify-content-center">
						<div className="col-12 col-lg-5 text-center individual-therapy">
							<h2>Individual Therapy</h2>
							<a
								className="btn-community btn btn-light border mt-2"
								href="https://docs.google.com/forms/d/e/1FAIpQLSdkaY76V9Dpb8HpMla6bK24lH9u4Ry-luGvbCO-49uLMTcoDg/viewform"
							>
								click here to register
							</a>
							<img
								className=""
								src="assets/images/individual-therapy.png"
								alt="individual-therapy"
							/>
						</div>
						<div className="col-12 col-lg-5 text-center">
							<h2>Couples Therapy</h2>
							<a
								className="btn-community btn btn-light border mt-2"
								href="https://docs.google.com/forms/d/e/1FAIpQLSeKYbsr3k2hQNrdgNFI_n7TEBGfUapO8sr8pxqNkmeXcl4qAw/viewform"
							>
								click here to register
							</a>
							<img
								className=""
								src="assets/images/couples-therapy.png"
								alt="couples-therapy"
							/>
						</div>
					</div>
				</div>
			</div>
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

export default Therapy;
