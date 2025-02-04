import React from "react";
import "../css/Therapy.css";

import "../css/Testimonials.css";
function Therapy() {
	return (
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
						which I provide mental health support to South Asians
						globally.
					</p>
					<p>
						I created the name &quot;Therapeutically Yours&quot;
						because it resembles a sign-off or signature at the end
						of a letter. This evokes a sense of warmth and
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
							As a trauma-informed clinician, I believe in doing
							deep work in therapy. My approach is eclectic,
							holistic, and collaborative. My therapeutic alliance
							is grounded in openness, respect, honesty, trust,
							and humour. I consciously work towards providing a
							safe, non- judgmental space for my clients. My aim
							is to help them feel empowered, live freely and
							authentically, thrive in their relationships with
							themselves and others, experience healing and
							change, and uncover their purpose in life. I
							appreciate and value the uniqueness of each client's
							characteristics and life journey that they bring
							with them. I honour the courage and vulnerability it
							takes to ask for help, to look within, and to
							embrace ourselves. I feel gratitude towards my
							clients for inviting me to work alongside them in
							their healing journey and for allowing me to provide
							support as they encounter various challenges and
							transitions in life.
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
						Please note: Session appointments need prior booking.
					</p>
				</div>
				{/* therapy forms */}
				<div className="row m-top-100  justify-content-center">
					<table className="table table-borderless w-90">
						<thead>
							<tr className="text-center">
								<th scope="col" className="border-end">
									Individual Therapy
								</th>
								<th scope="col">Couples Therapy</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-center">
								<td className="border-end">
									<a
										className="btn-community btn btn-light border"
										href="https://docs.google.com/forms/d/e/1FAIpQLSdkaY76V9Dpb8HpMla6bK24lH9u4Ry-luGvbCO-49uLMTcoDg/viewform"
									>
										In-take form for Individual Therapy
									</a>
								</td>
								<td>
									<a
										className="btn-community btn btn-light border"
										href="https://docs.google.com/forms/d/e/1FAIpQLSeKYbsr3k2hQNrdgNFI_n7TEBGfUapO8sr8pxqNkmeXcl4qAw/viewform"
									>
										In-take form for Couples Therapy
									</a>
								</td>
							</tr>
							<tr>
								<td className="border-end">
									<img
										className=""
										src="assets/images/individual-therapy.png"
										alt="individual-therapy"
									/>
								</td>
								<td>
									<img
										className=""
										src="assets/images/couples-therapy.png"
										alt="couples-therapy"
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Therapy;
