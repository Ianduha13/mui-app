import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import Blogs from "./components/Blogs"
import ContactForm from "./components/ContactForm"

const App = () => {
	return (
		<div className='App' style={{ display: "flex", flexDirection: "column" }}>
			<BrowserRouter>
				<Navbar />
				<HomePage />
				<Blogs />
				<ContactForm />
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
