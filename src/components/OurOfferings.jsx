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
import CarrouselButtons from "./CarrouselButtons"
import {
	Offerings,
	cardContent1,
	cardContent2,
	cardContent3,
} from "./constants/Offerings"

const OurOfferings = ({ width }) => {
	const [switchSelected, setSwitchSelected] = useState(1)
	const [indexShown, setIndexShown] = useState(0)
	const cardContentSelected =
		switchSelected === 1
			? cardContent1
			: switchSelected === 2
			? cardContent2
			: cardContent3
	return (
		<Container
			id='ourOfferings'
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				paddingX: "0px",
			}}
		>
			<Typography
				variant='h4'
				sx={{
					borderBottom: 3,
					borderColor: "#01244A",
					px: "8px",
					fontWeight: "700",
					fontSize: { xs: "20px", lg: "28px" },
					pb: { xs: "5px", lg: "10px" },
					fontSize: { xs: "20px", lg: "28px" },
					color: "#01244A",
				}}
			>
				Our Offerings
			</Typography>
			<Typography
				sx={{
					my: "20px",
					textAlign: "center",
					fontSize: { xs: "14px", lg: "16px" },
					lineHeight: "24px",
				}}
			>
				This whole purchase journey can be divided into three stages. For more
				details,{" "}
				<a
					href='/'
					style={{
						textDecoration: "none",
						fontWeight: "700",
						color: "#002550",
					}}
				>
					Click Here
				</a>
			</Typography>
			<Box
				sx={{
					display: "flex",
					weight: "100vw",
					gap: "29px",
					mb: { xs: "20px", lg: "34px" },
				}}
			>
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
				{width <= 975
					? cardContentSelected.map((x, i) => {
							if (i === indexShown) {
								return (
									<Card
										key={x.header}
										variant='outlined'
										sx={{
											position: "relative",
											height: { xs: "452px", lg: "631px" },
											width: { xs: "360px", lg: "455px" },
											padding: { xs: "15px", lg: "24px" },
										}}
									>
										<CardMedia
											sx={{
												height: { xs: "245px", lg: "319px" },
												width: { xs: "330px", lg: "407px" },
											}}
										>
											<img
												style={{ height: "100%", width: "100%" }}
												src={x.media}
												alt='image27'
											/>
										</CardMedia>
										<CarrouselButtons
											indexShown={indexShown}
											setIndexShown={setIndexShown}
										/>
										<CardContent
											sx={{
												display: "flex",
												flexDirection: "column",
												padding: "0",
												gap: { xs: "10px", lg: "20px" },
												mt: { xs: "10px", lg: "30px" },
											}}
										>
											<Typography
												variant='h4'
												sx={{
													fontSize: { xs: "20px", lg: "28px" },
													color: "#002550",
												}}
											>
												{x.header}
											</Typography>
											<Typography
												sx={{
													color: "#1A1A1A",
													opacity: "0.6",
													fontSize: { xs: "14px", lg: "18px" },
												}}
											>
												{x.content}
											</Typography>
										</CardContent>
										<CardActions
											sx={{ padding: "0", mt: { xs: "10px", lg: "20px" } }}
										>
											<Button
												variant='outlined'
												sx={{
													fontWeight: "600",
													fontSize: { xs: "14px", lg: "18px" },
													py: { xs: "6px", lg: "10px" },
													px: { xs: "16px", lg: "32px" },
												}}
											>
												Contact Us <ArrowForward sx={{ pl: "4px" }} />
											</Button>
										</CardActions>
									</Card>
								)
							}
					  })
					: cardContentSelected.map((x) => (
							<Card
								key={x.header}
								variant='outlined'
								sx={{
									position: "relative",
									height: { xs: "452px", lg: "631px" },
									width: { xs: "360px", lg: "455px" },
									padding: { xs: "15px", lg: "24px" },
								}}
							>
								<CardMedia
									sx={{
										height: { xs: "245px", lg: "319px" },
										width: { xs: "330px", lg: "407px" },
									}}
								>
									<img
										style={{ height: "100%", width: "100%" }}
										src={x.media}
										alt='image27'
									/>
								</CardMedia>
								<CardContent
									sx={{
										display: "flex",
										flexDirection: "column",
										padding: "0",
										gap: { xs: "10px", lg: "20px" },
										mt: { xs: "10px", lg: "30px" },
									}}
								>
									<Typography
										variant='h4'
										sx={{
											fontSize: { xs: "20px", lg: "28px" },
											color: "#002550",
										}}
									>
										{x.header}
									</Typography>
									<Typography
										sx={{
											color: "#1A1A1A",
											opacity: "0.6",
											fontSize: { xs: "14px", lg: "18px" },
										}}
									>
										{x.content}
									</Typography>
								</CardContent>
								<CardActions
									sx={{ padding: "0", mt: { xs: "10px", lg: "20px" } }}
								>
									<Button
										variant='outlined'
										sx={{
											fontWeight: "600",
											fontSize: { xs: "14px", lg: "18px" },
											py: { xs: "6px", lg: "10px" },
											px: { xs: "16px", lg: "32px" },
										}}
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
