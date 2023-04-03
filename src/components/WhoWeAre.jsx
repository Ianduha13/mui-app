import { ArrowForward } from "@mui/icons-material"
import WhoWeAreImg from "../assets/imgs/INREGlobal-JTS/image 27.png"
import { Paper, Typography, Box, Button } from "@mui/material"

const WhoWeAre = () => {
	return (
		<Paper
			elevation={0}
			sx={{
				width: { xs: "360px", lg: "1464px" },
				height: { xs: "433px", lg: "409px" },
				bgcolor: "#F1F1F1",
				display: "flex",
				alignItems: "center",
				flexDirection: { xs: "column", lg: "row" },
				px: { xs: "10px", lg: "27px" },
				py: { xs: "10px", lg: "0px" },
				gap: { xs: "10px", lg: "34px" },
			}}
		>
			<img style={{ width: "100%" }} src={WhoWeAreImg} alt='whoweareimg' />
			<Box
				sx={{
					height: "100%",
					width: "100%",
					mr: { xs: "0px", lg: "27px" },
					display: { xs: "flex", lg: "block" },
					flexDirection: "column",
					justifyContent: "center",
					gap: { xs: "10px", lg: "0px" },
				}}
			>
				<Typography sx={{ display: { xs: "block", lg: "none" } }}>
					Real State
				</Typography>
				<Typography
					variant='h1'
					sx={{
						mb: { xs: "0px", lg: "20px" },
						fontSize: { xs: "20px", lg: "36px" },
						fontWeight: "600",
						marginTop: { xs: "0px", lg: "42px" },
						lineHeight: { xs: "27.24px", lg: "42.59px" },
					}}
				>
					Who We Are
				</Typography>
				<Typography
					variant='h6'
					sx={{
						color: "#1A1A1A",
						lineHeight: "22.59px",
						fontSize: "14px",
						opacity: "0.8",
						display: { xs: "block", lg: "none" },
					}}
				>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam,
				</Typography>
				<Typography
					variant='h6'
					sx={{
						color: "#1A1A1A",
						lineHeight: "22.59px",

						opacity: "0.8",
						display: { xs: "none", lg: "block" },
					}}
				>
					The Indian real estate sector is resilient despite global headwinds.
					Returns are impressive and the sector is expected to reach US$ 1
					trillion in market size by 2030 (Niti Aayog report, 2021). However,
					the whole real estate purchase journey is very tedious and takes more
					than 2 years on average. Further, as the ticket size of this
					investment is large, security and trust become quite critical.
					Problems compound when you are currently away from your purchase
					destination. If you are experiencing difficulties in the real estate
					purchase journey, we are here to make it fast and transparent.
				</Typography>
				<Button
					variant='outlined'
					sx={{
						py: "12px",
						px: "24px",
						mt: { xs: "0", lg: "35px" },
						fontWeight: "600",
						fontSize: "18px",
					}}
				>
					Contact Now <ArrowForward sx={{ pl: "4px" }} />
				</Button>
			</Box>
		</Paper>
	)
}
export default WhoWeAre
