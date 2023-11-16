import { Outlet } from "react-router-dom";
import Header from "./Header";
import PageLinks from "./PageLinks";

const Layout = () => {
	return (
		<div>
			<nav className="navbar">
				<div className="nav-center">
					<Header />
					<PageLinks parentClass="nav-link" />
				</div>
			</nav>
			<Outlet />
		</div>
	);
};

export default Layout;
