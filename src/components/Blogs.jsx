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
import image273 from "../assets/imgs/INREGlobal-JTS/image 27-3.png"
import image274 from "../assets/imgs/INREGlobal-JTS/image 27-4.png"
import image275 from "../assets/imgs/INREGlobal-JTS/image 27-5.png"
import { ArrowForward } from "@mui/icons-material"
import { DateRange } from "@mui/icons-material"

const Blogs = () => {
	const blogs = [
		{
			theme: "Real Estate, Analysis",
			title: "Guide for personal property Buying ",
			author: "Admin",
			date: "09 jun 2022",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
			image: image273,
		},
		{
			theme: "Real Estate, Analysis",
			title: "Guide for personal property Buying ",
			author: "Admin",
			date: "09 jun 2022",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
			image: image274,
		},
		{
			theme: "Real Estate, Analysis",
			title: "Guide for personal property Buying ",
			author: "Admin",
			date: "09 jun 2022",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
			image: image275,
		},
	]
	return (
		<Container
			maxWidth='none'
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				mb: "35px",
				bgcolor: "#F1F1F1",
				py: "35px",
			}}
		>
			<Box
				sx={{
					borderBottom: 5,
					mb: "17px",
				}}
			>
				<Typography
					variant='h4'
					sx={{
						pb: "22px",
						px: "24px",
					}}
				>
					Blogs
				</Typography>
			</Box>
			<Box sx={{ display: "flex", gap: "46px" }}>
				{blogs.map((x) => (
					<Card
						key={x.image}
						variant='outlined'
						sx={{ height: "767px", width: "455px", padding: "24px" }}
					>
						<CardMedia
							sx={{
								display: "flex",
								alignItems: "center",
								bgcolor: "#1F1F1F",
								borderRadius: "10px",
								justifyContent: "center",
								alignItems: "flex-end",
								width: "407px",
								height: "319px",
							}}
						>
							<img src={x.image} alt={x.name} />
						</CardMedia>
						<CardContent>
							<Typography variant='h5' sx={{ fontSize: "16px", mt: "30px" }}>
								{x.theme}
							</Typography>
							<Box
								sx={{
									display: "flex",
									my: "30px",
									justifyContent: "space-between",
								}}
							>
								<Box sx={{ position: "relative" }}>
									<DateRange
										style={{ position: "absolute", fontSize: "22px" }}
									/>
									<Typography
										variant='h5'
										sx={{ ml: "30px", fontSize: "16px" }}
									>
										{x.date}
									</Typography>
								</Box>
								<Typography variant='h5' sx={{ fontSize: "16px" }}>
									{x.author}
								</Typography>
							</Box>
							<Typography variant='h4'>{x.title}</Typography>
							<Typography
								sx={{
									mt: "14px",
									mb: "24px",
									color: "#1A1A1A",
									opacity: "0.6",
								}}
							>
								{x.description}
							</Typography>
						</CardContent>
						<CardActions
							sx={{
								display: "flex",
								width: "100%",
							}}
						>
							<Button
								variant='outlined'
								sx={{
									py: "12px",
									px: "32px",
									display: "flex",
								}}
							>
								View More
								<ArrowForward />
							</Button>
						</CardActions>
					</Card>
				))}
			</Box>
		</Container>
	)
}
export default Blogs
