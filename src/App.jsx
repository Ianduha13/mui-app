import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import Blogs from "./components/Blogs"
import ContactForm from "./components/ContactForm"
import { useState, useEffect } from "react"

const App = () => {
	const [width, setWidth] = useState(window.innerWidth)
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])
	return (
		<div className='App' style={{ display: "flex", flexDirection: "column" }}>
			<BrowserRouter>
				<Navbar />
				<HomePage width={width} />
				<Blogs width={width} />
				<ContactForm />
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
