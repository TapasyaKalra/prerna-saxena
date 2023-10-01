import React from "react";
import "../css/Community.css";

export default function Community() {
	return (
		<>
			{/* cover image */}
			<div className="container-fluid community">
				<div className="row m-top-50">
					<img
						className="therapy__logo"
						src="assets/images/logo/TY-post/2.png"
						alt="logo"
					/>
				</div>
			</div>
			{/* headings */}
			<div className="container">
				{/* main heading */}
				<div className="row m-top-50 w-75 mx-auto">
					<p className="text-center fw-bold welcome-text">
						Welcome to Therapeutically Yours.
						<br />I provide mental health support to south asians
						globally.
					</p>
					<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
				</div>
				{/* 2nd heading */}
				<div className="row m-top-50">
					<p className="fw-bold text-center">
						Here are some community services currently active at
						Therapeutically Yours.
					</p>
				</div>
			</div>
			{/* content */}
			<div className=" container ps-4 ps-4">
				{/* support groups */}
				<div className="row m-top-50 justify-content-center">
					<div className="col-12 col-md-10 text-center">
						<h2 className="">Support Groups</h2>
						<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
					</div>
				</div>
				<div className="row m-top-50 justify-content-center ">
					<div className="col-12 col-md-5">
						<img
							src="assets\images\support-groups\ST1.png"
							alt="support group"
						/>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://forms.gle/UPTZd4CKpjPCeszf8"
							className="btn-community btn btn-outline-primary text-dark w-100"
						>
							register here
						</a>
					</div>
					<div className="col-12 col-md-10 m-top-50">
						<p>
							I believe that we as human beings have the strength,
							understanding and care in us to be vulnerable and
							provide someone the space to be so too. We are meant
							to lean on each other for support and learn from
							each other in our journey of life. Keeping this in
							mind, I am running support groups on the topics
							presented in the list. Currently the support groups
							are open for{" "}
							<span className="fw-bold">females only</span>. In
							order for it to be a safe and open space, and for
							participants to be able to make the most out of it,
							the support groups have limited seats. Kindly fill
							in the form below to join the support group.
						</p>
						<p className="fst-italic">
							Disclaimer: Please note, if you are a present or
							past therapy client at Therapeutically Yours, you
							are not eligible to join this support group.
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
							<span className="fw-bold">Languages</span>
							: English, Hindi
							<br />
						</p>
					</div>
				</div>
				{/* book club */}
				<div className="row m-top-50 justify-content-center">
					<div className="col-12 col-md-10 text-center">
						<h2 className="">Book Club</h2>
						<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
					</div>
				</div>
				<div className="row m-top-50 mx-auto justify-content-center">
					<div className="col-12 col-md-10 ">
						<p>
							For people who love to read and want to make it a
							better, interactive, more insightful and supportive
							experience; this book club is open for all age
							groups. Kindly fill in the form below to join the
							book club.
						</p>
						<p className="fst-italic">
							Disclaimer: Please note, if you are a present or
							past therapy client at Therapeutically Yours, you
							are not eligible to join this book club.
						</p>
						<div className="text-center">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://forms.gle/LSEYSyJF319A1eMs8"
								className="btn-community btn btn-outline-primary text-dark"
							>
								register here
							</a>
						</div>
					</div>
				</div>
				{/* instagram */}
				<div className="row m-top-50 justify-content-center">
					<div className="col-12 col-md-10 text-center">
						<h2 className="">Instagram</h2>
						<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
					</div>
				</div>
				<div className="row m-top-50 mx-auto justify-content-center">
					<div className="col-12 col-md-10 ">
						<p>
							Join me on Instagram @therapeuticallyyours, where I
							share content as a therapist, writer and human, on
							mental health, therapy, self exploration,
							relationships, life as we know it and more, based on
							humour, research, experience and inspiration. I
							started this page on January 01st, 2022 with an aim
							to contribute to mental health advocacy, to market
							my practice and share work updates.
						</p>
						<p>
							Here are some of the themes available on the page:
						</p>
						<ul className="mx-3">
							<li>
								<p>
									<span className="fw-bold">
										All Things Therapy!
									</span>
									- A complete guide to the world of therapy.
								</p>
							</li>
							<li>
								<p>
									<span className="fw-bold">
										Let's Talk About
									</span>{" "}
									- A series focused on psychoeducation about
									some of the basic aspects of mental health.
								</p>
							</li>
							<li>
								<p>
									<span className="fw-bold">
										Mental health Memes Mondays!
									</span>{" "}
									- Weekly dose of memes on anxiety,
									depression, life, relationships, therapy
									etc. shared with the goal of creating
									self-awareness using humour.
								</p>
							</li>
							<li>
								<p>
									<span className="fw-bold">
										Therapist's Thoughts Thursdays!
									</span>{" "}
									- Weekly reels on affirmations, therapy,
									reminders to self, letters from a therapist
									(me!) etc.
								</p>
							</li>
							<li>
								<p>
									<span className="fw-bold">
										Therapist life Thursdays!
									</span>{" "}
									- Random photo dumps of my life once in a
									few months as an attempt to connect better
									by helping you know more about me or 'the
									therapist life'!
								</p>
							</li>
						</ul>
						<div className="text-center">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.instagram.com/therapeuticallyyours/"
								className="btn-community btn btn-outline-primary text-dark"
							>
								follow here
							</a>
						</div>
					</div>
				</div>
				{/* medium */}
				<div className="row m-top-50 mx-auto justify-content-center">
					<div className="col-12 col-md-10 text-center">
						<h2 className="">Medium</h2>
						<hr class="heading-underline mx-auto border border-primary border-3 opacity-100" />
					</div>
				</div>
				<div className="row mx-auto justify-content-center m-top-50">
					<div className="col-12 col-md-10 ">
						<p>
							Join me on Medium for monthly blogs on topics such
							as mental health, therapy, self exploration,
							relationships, life as we know it and more.
						</p>
						<div className="text-center">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.instagram.com/therapeuticallyyours/"
								className="btn-community btn btn-outline-primary text-dark"
							>
								follow here
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
