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
import { useState } from "react"
import {
	Offerings,
	cardContent1,
	cardContent2,
	cardContent3,
} from "./constants/Offerings"

const OurOfferings = () => {
	const [switchSelected, setSwitchSelected] = useState(1)
	const cardContentSelected =
		switchSelected === 1
			? cardContent1
			: switchSelected === 2
			? cardContent2
			: cardContent3
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
					<Button
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
							":focus": {
								borderBottom: "5px solid #000",
								backgroundColor: "#CCD3DC",
								boxSizing: "border-box", // i tried to prevent the move with this prop
							},
						}}
						onClick={() => setSwitchSelected(x.number)}
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
					</Button>
				))}
			</Box>
			<Box sx={{ display: "flex", gap: "46px" }}>
				{cardContentSelected.map((x) => (
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
