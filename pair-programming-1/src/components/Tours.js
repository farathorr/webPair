import Title from "./Title";
import { useState } from "react";
import { tours } from "../data";

const Tours = () => {
	const [toursData, setToursData] = useState(tours);

	function Tour({ id, image, date, info, title, location, cost, duration }) {
		const filterTours = () => {
			const newTours = toursData.filter((tour) => tour.id !== id);
			console.log(newTours);
			console.log(id);
			setToursData(newTours);
		};

		return (
			<article className="tour-card">
				<div className="tour-img-container">
					<img src={image} className="tour-img" alt="Tibet Adventure" />
					<p className="tour-date">{date}</p>
				</div>
				<div className="tour-info">
					<div className="tour-title">
						<h4>{title}</h4>
					</div>
					<p>{info}</p>
					<div className="tour-footer">
						<p>
							<span>
								<i className="fas fa-map"></i>
							</span>
							{location}
						</p>
						<p>from ${cost}</p>
						<p>{duration} days</p>
					</div>
				</div>
				<button className="hideTour" onClick={filterTours}>
					Hide
				</button>
			</article>
		);
	}
	return (
		<div>
			<section className="section" id="tours">
				<Title title="featured" span="tours" />
				<div className="section-center featured-center">
					{toursData.map((tour) => (
						<Tour id={tour.id} key={tour.id} {...tour} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Tours;
