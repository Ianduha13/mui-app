import { ArrowForward } from "@mui/icons-material"
import WhoWeAreImg from "../assets/imgs/INREGlobal-JTS/image 27.png"
import { Paper, Typography, Box, Button } from "@mui/material"

const WhoWeAre = () => {
	return (
		<Paper
			elevation={0}
			sx={{
				width: "1464px",
				height: "409px",
				bgcolor: "#F1F1F1",
				display: "flex",
				alignItems: "center",
				px: "27px",
				gap: "34px",
			}}
		>
			<img src={WhoWeAreImg} alt='whoweareimg' />
			<Box sx={{ height: "100%", width: "100%", mr: "27px" }}>
				<Typography
					variant='h1'
					sx={{ mb: "20px", marginTop: "42px", lineHeight: "42.59px" }}
				>
					Who We Are
				</Typography>
				<Typography
					variant='h6'
					sx={{
						color: "#1A1A1A",
						lineHeight: "22.59px",
						opacity: "0.8",
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
						mt: "35px",
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
