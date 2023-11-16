import Title from "./Title";
import { useState } from "react";
import { services } from "../data";

function Services() {
	const [servicesData, setServicesData] = useState(services);

	function Service({ icon, title, text }) {
		return (
			<article className="service">
				<span className="service-icon">
					<i className={icon} />
				</span>
				<div className="service-info">
					<h4 className="service-title">{title}</h4>
					<p className="service-text">{text}</p>
				</div>
			</article>
		);
	}

	return (
		<div>
			<section className="section services" id="services">
				<Title title="our" span="services" />
				<div className="section-center services-center">
					{services.map((service) => (
						<Service key={service.id} {...service} />
					))}
				</div>
			</section>
		</div>
	);
}

export default Services;
