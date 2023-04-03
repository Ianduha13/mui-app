import { Box, Typography } from "@mui/material"
import CompanyLogo from "../assets/imgs/INREGlobal-JTS/Icons/10.svg"
import HeaderImg from "../assets/imgs/INREGlobal-JTS/Group 36931.png"

const Hero = () => {
	return (
		<Box
			sx={{
				position: "relative",
				width: {
					xs: "390px",
					lg: "1464px",
				},
				height: {
					xs: "186px",
					lg: "100%",
				},
			}}
		>
			<Box
				sx={{
					objectFit: "cover",
					position: "absolute",
					marginTop: { xs: "42px", lg: "80px" },
					left: { xs: "16px", lg: "54px" },
				}}
			>
				<Box sx={{ display: { xs: "none", lg: "block" } }}>
					<img
						style={{
							width: "107px",
							mb: "60px",
							mt: "83px",
							ml: "54px",
						}}
						src={CompanyLogo}
					/>
				</Box>
				<Typography
					variant='h2'
					sx={{
						fontFamily: "Solway",
						fontSize: { xs: "14px", lg: "40px" },
						color: "#FFF",
						fontWeight: "400",
						width: { xs: "103px", lg: "388px" },
					}}
				>
					Making Your{" "}
					<Box
						component='span'
						sx={{
							fontWeight: "700",
							color: { xs: "#14FF00", lg: "#FAFF00" },
							fontSize: { xs: "14px", lg: "48px" },
						}}
					>
						Real Estate
					</Box>{" "}
					Purchase Journey Faster And Transparent
				</Typography>
			</Box>
			<img
				style={{ width: "100%", height: "100%" }}
				src={HeaderImg}
				alt='rectangle'
			/>
		</Box>
	)
}
export default Hero
