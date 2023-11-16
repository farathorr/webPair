import Header from "./Header";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar">
				<div className="nav-center">
					<Header />
					<PageLinks parentClass="nav-link" />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
