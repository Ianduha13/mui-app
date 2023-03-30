import {
	Box,
	Container,
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
} from "@mui/material"
import { ArrowForward } from "@mui/icons-material"
import Image27 from "../assets/imgs/INREGlobal-JTS/image 27-1.png"
import Image272 from "../assets/imgs/INREGlobal-JTS/image 27-2.png"

const OurOfferings = () => {
	const cardContent = [
		{
			media: Image27,
			header: "Background verification",
			content:
				"Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...",
		},
		{
			media: Image272,
			header: "Virtual site visit",
			content:
				"It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...",
		},
		{
			media: Image272,
			header: "Title diligence",
			content:
				"Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...",
		},
	]
	const Offerings = [
		{
			number: 1,
			text: "Pre-Booking",
		},
		{
			number: 2,
			text: "Post-Booking & Pre-Registration",
		},
		{
			number: 3,
			text: "Post-Registration",
		},
	]
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Typography variant='h4' sx={{ borderBottom: 5, pb: "22px", px: "8px" }}>
				Our Offerings
			</Typography>
			<Typography sx={{ my: "20px" }}>
				This whole purchase journey can be divided into three stages. For more
				details, <a href='/'>Click Here</a>
			</Typography>
			<Box sx={{ display: "flex", weight: "100vw", gap: "29px", mb: "34px" }}>
				{Offerings.map((x) => (
					<Box
						key={x.number}
						sx={{
							height: "100px",
							width: "467px",
							bgcolor: "#F2F4F6",
							display: "flex",
							borderRadius: "5px",
							paddingY: "20px",
							justifyContent: "center",
							alignItems: "center",
							boxSizing: "border-box", // i tried to prevent the move with this prop
							gap: "20px",
							":hover": {
								borderBottom: "5px solid #000",
								backgroundColor: "#CCD3DC",
								boxSizing: "border-box", // i tried to prevent the move with this prop
							},
						}}
					>
						<Box
							sx={{
								height: "48px",
								width: "48px",
								display: "flex",
								textAlign: "center",
								borderRadius: "9999px",
								bgcolor: "white",
								alignItems: "center",
								justifyItems: "center",
							}}
						>
							<Typography variant='h5' sx={{ width: "100%" }}>
								{x.number}
							</Typography>
						</Box>
						<Box>
							<Typography variant='h5' sx={{ maxWidth: "220px" }}>
								{x.text}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
			<Box sx={{ display: "flex", gap: "46px" }}>
				{cardContent.map((x) => (
					<Card
						key={x.header}
						variant='outlined'
						sx={{
							position: "relative",
							height: "631px",
							width: "455px",
							padding: "24px",
						}}
					>
						<CardMedia>
							<img src={x.media} alt='image27' />
						</CardMedia>
						<CardContent>
							<Typography variant='h4'>{x.header}</Typography>
							<Typography sx={{ my: "20px", color: "#1A1A1A", opacity: "0.6" }}>
								{x.content}
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								variant='outlined'
								style={{ position: "absolute", bottom: "24px" }}
							>
								Contact Us <ArrowForward sx={{ pl: "4px" }} />
							</Button>
						</CardActions>
					</Card>
				))}
			</Box>
		</Container>
	)
}
export default OurOfferings
