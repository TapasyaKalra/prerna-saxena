import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CLIENT from "../testimonials/client";

function TestimonialCarousel(props) {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	var type = "";
	const stars = () => {
		return (
			<>
				<FontAwesomeIcon icon={faStar} />
				<FontAwesomeIcon icon={faStar} />
				<FontAwesomeIcon icon={faStar} />
				<FontAwesomeIcon icon={faStar} />
				<FontAwesomeIcon icon={faStar} />
			</>
		);
	};
	if (props.type === "client") {
		type = props.type;
	} else if (props.type === "colleague") {
		type = props.type;
	} else {
	}

	return (
		<div className="testimonials">
			<Carousel
				activeIndex={index}
				onSelect={handleSelect}
				interval={null}
			>
				<Carousel.Item>
					<img
						className=""
						src="assets/images/testimonial-bg.png"
						alt="Second slide"
					/>
					<Carousel.Caption>
						{stars()}
						<p>
							{CLIENT.map((item) => (
								<li key={item.id}>{item.testimonial}</li>
							))}
							If you're reading this to decide on your therapy
							journey, I recommend you to book an appointment with
							Prerna. I have been in therapy for a long time and
							trust me it's worth it. Therapy takes time and
							Prerna knows how to make it a space that is the best
							with my emotions - some things I hadn't felt for a
							long time before I came to therapy with Prerna. I
							recommend!
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className=""
						src="assets/images/testimonial-bg.png"
						alt="First slide"
					/>
					<Carousel.Caption>
						{stars()}
						<p>
							The sessions truly helped me connect with myself and
							helped me grow as a person. Prerna is
							non-judgemental and understanding of what I was
							going through. Overall a great experience.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className=""
						src="assets/images/testimonial-bg.png"
						alt="First slide"
					/>
					<Carousel.Caption>
						{stars()}
						<p>
							My favourite thing about Prerna and therapy with her
							is how collaborative it is. She made me realise how
							my thoughts, emotions and opinions matter. She
							helped me build a deeper connection with myself as
							we worked through trauma, depression and anxiety in
							my life. She helped me to accept myself. She helped
							me to love myself. She helped me to find myself!
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className=""
						src="assets/images/testimonial-bg.png"
						alt="First slide"
					/>
					<Carousel.Caption>
						{stars()}
						<p>
							I am so glad and grateful that I reached out to
							Prerna for my mental health. She understood my
							concerns well and helped me throughout the process.
							I was able to find myself and understand myself
							because of her. I am in a much better space now
							thanks to her.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className=""
						src="assets/images/testimonial-bg.png"
						alt="First slide"
					/>
					<Carousel.Caption>
						{stars()}
						<p>
							Prerna helped me and healed me. I don't know how to
							describe it best. She saved me. Therapy with her
							came in as a ray of hope in my life and it was a
							long journey but I am happy and healthy. My
							favourite thing was how Prerna works on holistic
							wellness. She understands the relationship between
							our mind and body well and works on overall
							wellbeing and healing. I have so much gratitude and
							good thoughts for her.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className=""
						src="assets/images/testimonial-bg.png"
						alt="First slide"
					/>
					<Carousel.Caption>
						{stars()}
						<p>
							I have tried therapy several times before but it
							never helped me. But I really needed help as I was
							going through a tough time, so I decided to give it
							one more go, and I am glad that I did that! Ms
							Prerna really helped me with practices that are
							beneficial for me in controlling and dealing with my
							anger issues. With her suggestions and guidance, I
							am able to work better on problems and focus on my
							mental health in more practical ways. She was very
							good in terms of patiently listening and
							understanding what I was going through, she helped
							me understand myself better. I am so thankful and
							grateful that I found her and decided to give
							therapy one more chance!
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default TestimonialCarousel;
