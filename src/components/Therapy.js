import React, { useState } from "react";
import "../css/Therapy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Carousel } from "react-bootstrap";
import "../css/Testimonials.css";

function Therapy() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div className="therapy">
			{/* cover image */}
			<div className="container-fluid">
				<div className="row m-top-50">
					<img
						className="therapy__logo"
						src="assets/images/logo/TY-post/2.png"
						alt="logo"
					/>
				</div>
			</div>

			<div className="container">
				{/* heading */}
				<div className="row m-top-50">
					<h2 className="text-center fw-bold">
						Welcome to Therapeutically Yours. I provide mental
						health support to south asians globally.
					</h2>
					<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
				</div>
				{/* notice board */}
				<div className="row m-top-50 text-center border rounded border-dark w-75 mx-auto pt-3">
					<p>
						Please fill in the form for your preferred modality
						below. I'll reach out to you via email within 48 work
						hours.
					</p>
					<p className="fw-bold">
						Work Hours: Monday - Friday, 10:00 AM - 06:30 PM IST.
					</p>
					<p className="fst-italic">
						Disclaimer:
						<br />
						This isn't a 24*7 helpline and session appointments need
						prior booking and payment.
					</p>
				</div>
				{/* individual therapy */}
				<div className="row m-top-100">
					<h2 className="text-center">Individual Therapy</h2>
					<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
				</div>
				<div className="row m-top-50 justify-content-center">
					<div className="col-12 col-md-5">
						<Carousel
							activeIndex={index}
							onSelect={handleSelect}
							interval={null}
							variant="dark"
						>
							<Carousel.Item>
								<img
									className="w-100"
									src="assets/images/individual-therapy/IT1.png"
									alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="w-100"
									src="assets/images/individual-therapy/IT2.png"
									alt="Second slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="w-100"
									src="assets/images/individual-therapy/IT3.png"
									alt="Third slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="w-100"
									src="assets/images/individual-therapy/IT4.png"
									alt="Forth slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="w-100"
									src="assets/images/individual-therapy/IT5.png"
									alt="Fifth slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="w-100"
									src="assets/images/individual-therapy/IT6.png"
									alt="Sixth slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="w-100"
									src="assets/images/individual-therapy/IT7.png"
									alt="Seventh slide"
								/>
							</Carousel.Item>
						</Carousel>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://forms.gle/6KbZRafGrtN9bpyt6"
							className="btn btn-outline-primary text-dark w-100"
						>
							Register Here
						</a>
					</div>
					<div className="col-12 col-md-5">
						<p>
							Here are a few non-exhaustive lists of concerns that
							I work with. You might find yourself resonating with
							one or more concerns. The concerns are listed under
							the following categories: relationships, trauma and
							abuse, anxiety, depression, self-development,
							life-transitions and, health and wellness. Swipe to
							read.
						</p>
						<p>
							<span className="fw-bold">Age range</span>: 20-50
							years
							<br />
							<span className="fw-bold">
								Duration of therapy session
							</span>
							: 50 minutes
							<br />
							<span className="fw-bold">Mode of session</span>:
							Video call (Google Meet)
							<br />
							<span className="fw-bold">Languages</span>
							: English, Hindi
							<br />
							<span className="fw-bold">Status</span>: Currently
							accepting new clients.
							<br />
							<span className="fst-italic">
								Please note, sliding scale slots are currently
								full.
							</span>
						</p>
					</div>
				</div>
				{/* couples and family therapy */}
				<div className="row m-top-100">
					<h2 className="text-center">Couples and Family Therapy</h2>
					<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
				</div>
				<div className="row m-top-50 justify-content-center">
					<div className="col-12 col-md-5">
						<Carousel
							activeIndex={index}
							onSelect={handleSelect}
							interval={null}
							variant="dark"
						>
							<Carousel.Item>
								<img
									className="w-100"
									src="assets/images/couples-therapy/CT1.png"
									alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="w-100"
									src="assets/images/family-therapy/FT1.png"
									alt="Second slide"
								/>
							</Carousel.Item>
						</Carousel>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://forms.gle/FMUfwoe47WQBCZQH9"
							className="btn btn-outline-primary text-dark w-100"
						>
							Register Here
						</a>
					</div>
					<div className="col-12 col-md-5">
						<p>
							I work with clients in couples and family therapy to
							help release the cycle of conflict and reconnect
							again. Clients might be feeling worried, angry, or
							lonely, and might wonder, “Things just don’t feel
							like they used to.” In order to support them, I work
							with a range of concerns. I believe our lives are
							better when we know how to navigate our
							relationships, with ourselves and others. Here are a
							few non-exhaustive lists of concerns that I work
							with.
						</p>
						<p>
							<span className="fw-bold">Age range</span>: 20-50
							years
							<br />
							<span className="fw-bold">
								Duration of therapy session
							</span>
							: 80 minutes
							<br />
							<span className="fw-bold">Mode of session</span>:
							Video call (Google Meet)
							<br />
							<span className="fw-bold">Languages</span>: English,
							Hindi
							<br />
							<span className="fw-bold">Status</span>: Currently
							accepting new clients.
							<br />
							<span className="fst-italic">
								Please note, sliding scale slots are currently
								full.
							</span>
						</p>
					</div>
				</div>

				<div className="row m-top-100">
					<hr />
				</div>
				{/* Frequently Asked Questions */}
				<div className="row m-top-100 ">
					<h2 className="text-center">Frequently Asked Questions</h2>
					<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
				</div>
			</div>
			<div className="container-fluid bg-primary py-5 m-top-50 m-bottom-100">
				<div className="row justify-content-center mb-4">
					<div className="col-12 col-md-4  ">
						<ul className="m-0">
							<li>How would I know if I need therapy?</li>
							<li>What happens in the therapeutic process?</li>
							<li>What can I expect?</li>
							<li>How long does therapy last?</li>
						</ul>
					</div>
				</div>
				<div className="row justify-content-center ">
					<div className="col-12 col-md-10 text-center ">
						<p>
							Answers to all the questions mentioned here and many
							more questions can be found in this free Instagram
							Guide
						</p>
						<div className="text-center">
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-light "
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default Therapy;
