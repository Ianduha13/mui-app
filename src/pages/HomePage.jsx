import { Container } from "@mui/material"
import OurOfferings from "../components/OurOfferings"
import OurTeam from "../components/OurTeam"
import Hero from "../components/Hero"
import WhoWeAre from "../components/WhoWeAre"

const HomePage = () => {
	return (
		<Container
			sx={{
				width: "100vw",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				mt: "180px",
				gap: "35px",
			}}
		>
			<Hero />
			<WhoWeAre />
			<OurOfferings />
			<OurTeam />
		</Container>
	)
}
export default HomePage
