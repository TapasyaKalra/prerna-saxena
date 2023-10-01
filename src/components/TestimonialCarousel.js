import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CLIENT from "../testimonials/client";
import COLLEAGUE from "../testimonials/colleague";

function TestimonialCarousel(props) {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	var data = [];
	props.type === "client" ? (data = CLIENT) : (data = COLLEAGUE);

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

	return (
		<div className="testimonials">
			<Carousel
				activeIndex={index}
				onSelect={handleSelect}
				interval={null}
			>
				{data.map((item) => (
					<Carousel.Item key={item.id}>
						<div className="carousel-background">
							<Carousel.Caption>
								{stars()}
								<p>{item.testimonial}</p>
							</Carousel.Caption>
						</div>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
}

export default TestimonialCarousel;
