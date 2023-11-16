import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Registeration from "./components/Registeration";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Hero />} />
					<Route path="/services" element={<Services />} />
					<Route path="/tours" element={<Tours />} />
					<Route path="/about" element={<About />} />
					<Route path="/register" element={<Registeration />} />
					<Route path="*" element={<NotFound />} /> {/* Added this line for 404 */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
