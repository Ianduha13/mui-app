import { Container } from "@mui/material"
import OurOfferings from "../components/OurOfferings"
import OurTeam from "../components/OurTeam"
import Hero from "../components/Hero"
import WhoWeAre from "../components/WhoWeAre"

const HomePage = ({ width }) => {
	return (
		<Container
			sx={{
				width: "100vw",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				mx: "auto",
				mt: { xs: "58px", lg: "180px" },
				gap: { xs: "25px", lg: "35px" },
			}}
		>
			<Hero />
			<WhoWeAre />
			<OurOfferings width={width} />
			<OurTeam width={width} />
		</Container>
	)
}
export default HomePage
