import { Container, Box, Typography } from "@mui/material"
import CompanyLogo from "../assets/imgs/INREGlobal-JTS/Icons/10.svg"
import HeroText from "../assets/imgs/INREGlobal-JTS/Making your real estate purchase journey faster and transparent.png"
import HeaderImg from "../assets/imgs/INREGlobal-JTS/Group 36931.png"

const Hero = () => {
	return (
		<Box sx={{ position: "relative" }}>
			<Box
				sx={{
					objectFit: "cover",
					position: "absolute",
					marginTop: "80px",
					left: "54px",
				}}
			>
				<img
					style={{ width: "107px", mb: "60px", mt: "83px", ml: "54px" }}
					src={CompanyLogo}
				/>
				<Typography
					variant='h2'
					sx={{
						fontFamily: "Solway",
						fontSize: "40px",
						color: "#FFF",
						fontWeight: "400",
					}}
				>
					Making Your{" "}
					<Box
						component='span'
						sx={{ fontWeight: "700", color: "#FAFF00", fontSize: "48px" }}
					>
						Real <br /> Estate
					</Box>{" "}
					Purchase
					<br />
					Journey Faster And
					<br />
					Transparent
				</Typography>
			</Box>
			<img src={HeaderImg} alt='rectangle' />
		</Box>
	)
}
export default Hero
