import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Therapy from "./components/Therapy";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Community from "./components/Community";
import Writing from "./components/Writing";

function App() {
	document.addEventListener("contextmenu", (e) => {
		e.preventDefault();
	});
	return (
		<div className="app">
			<BrowserRouter>
				<ScrollToTop />
				<Navigation />
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/testimonials" element={<Testimonials />} />
					<Route path="/contact" element={<Contact />} />

					<Route path="/therapy" element={<Therapy />} />
					<Route path="/writing" element={<Writing />} />
					<Route path="/community" element={<Community />} />
					<Route path="/newsletter" element={<Newsletter />} />
					<Route path="/" element={<About />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
