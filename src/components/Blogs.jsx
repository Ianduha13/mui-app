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
					borderBottom: 3,
					mb: "17px",
					borderColor: "#01244A",
				}}
			>
				<Typography
					variant='h4'
					sx={{
						px: "24px",
						pb: { xs: "5px", lg: "22px" },
						fontSize: { xs: "20px", lg: "28px" },
						color: "#01244A",
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
						sx={{
							position: "relative",
							height: { lg: "767px" },
							width: { xs: "360px", lg: "455px" },
							padding: { xs: "15px", lg: "24px" },
						}}
					>
						<CardMedia
							sx={{
								display: "flex",
								alignItems: "center",
								bgcolor: "#1F1F1F",
								borderRadius: "10px",
								justifyContent: "center",
								alignItems: "flex-end",
								width: { xs: "330px", lg: "407px" },
								height: { xs: "207px", lg: "319px" },
							}}
						>
							<img
								style={{ width: "100%", height: "100%" }}
								src={x.image}
								alt={x.name}
							/>
						</CardMedia>
						<CardContent sx={{ padding: "0" }}>
							<Typography
								variant='h5'
								sx={{ fontSize: "16px", mt: { xs: "20px", lg: "30px" } }}
							>
								{x.theme}
							</Typography>
							<Box
								sx={{
									display: "flex",
									mt: { xs: "11px", lg: "30px" },
									mb: { xs: "21px", lg: "30px" },
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
								<Typography
									variant='h5'
									sx={{ fontSize: "16px", opacity: "0.5" }}
								>
									By {x.author}
								</Typography>
							</Box>
							<Typography
								variant='h4'
								sx={{
									color: "#002550",
									fontSize: { xs: "20px", lg: "28px" },
								}}
							>
								{x.title}
							</Typography>
							<Typography
								sx={{
									mt: { xs: "10px", lg: "14px" },
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
								position: { xs: "relative", lg: "absolute" },
								bottom: { xs: "0", lg: "24px" },
								display: "flex",
								width: "100%",
								padding: "0",
							}}
						>
							<Button
								variant='outlined'
								sx={{
									py: "12px",
									px: "32px",
									fontSize: "18px",
									display: "flex",
									width: { xs: "100%", lg: "auto" },
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
