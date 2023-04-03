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
import Member1Img from "../assets/imgs/INREGlobal-JTS/image 27-6.png"
import Member2Img from "../assets/imgs/INREGlobal-JTS/image 27-8.png"
import Member3Img from "../assets/imgs/INREGlobal-JTS/image 31.png"
import { useState } from "react"
import CarrouselButtons from "./CarrouselButtons"

const OurTeam = ({ width }) => {
	const [indexShown, setIndexShown] = useState(0)
	const teamMembers = [
		{
			name: "Brajesh Pathak",
			description:
				"A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azur...",
			//e Capital Advisors Private Limited. He has also been part of the managing committee and execution committee of Azure Capital (100 Crore realty focused funds), he has been part of the execution committee of various special purpose vehicle of investee companies for plotted development, villa projects, and apartments including development work & construction management. He is deeply involved in the fund raising process including investors relationship. Retail sales, NRI relationship handling for real estates advisory. Recently, Lead the process of fund raising of various startups from seed round to series- B round.",
			role: "Co-Founder",
			image: Member1Img,
		},
		{
			name: "Deepak Shukla",
			description:
				"Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of...",
			// Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications.",

			role: "Co-Founder",
			image: Member3Img,
		},
		{
			name: "Alok Kumar Singh",
			description:
				"Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys...",
			// BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management.",
			role: "Co-Founder",
			image: Member2Img,
		},
	]
	return (
		<Container
			id='ourTeam'
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				mb: { xs: "20px", lg: "35px" },
			}}
		>
			<Box
				sx={{
					borderBottom: 3,
					borderColor: "#01244A",
					mb: "17px",
				}}
			>
				<Typography
					variant='h4'
					sx={{
						pb: { xs: "5px", lg: "22px" },
						fontSize: { xs: "20px", lg: "28px" },
						color: "#01244A",
					}}
				>
					Our Team Members
				</Typography>
			</Box>
			<Box sx={{ display: "flex", gap: "46px" }}>
				{width <= 975
					? teamMembers.map((x) => {
							if (teamMembers.indexOf(x) === indexShown) {
								return (
									<Card
										key={x.name}
										variant='outlined'
										sx={{
											position: "relative",
											height: { xs: "515px", lg: "592px" },
											width: { xs: "360px", lg: "455px" },
											padding: { xs: "15px", lg: "24px" },
											boxhadow: "0px 0px 4px rgba(0, 0, 0, 0.3)",
										}}
									>
										<CarrouselButtons
											indexShown={indexShown}
											setIndexShown={setIndexShown}
										/>
										<CardMedia
											sx={{
												display: "flex",
												bgcolor: "#1F1F1F",
												borderRadius: "10px",
												justifyContent: "center",
												alignItems: "flex-end",
												width: "100%",
												height: { xs: "245px", lg: "319px" },
											}}
										>
											<img
												style={{ height: "100%", width: "100%" }}
												src={x.image}
												alt={x.name}
											/>
										</CardMedia>
										<CardContent
											sx={{
												padding: "0px",
												mt: "20px",
												display: "flex",
												flexDirection: "column",
												gap: { xs: "12px", lg: "5px" },
											}}
										>
											<Typography
												variant='h4'
												sx={{
													fontFamily: "Open Sans, sans-serif",
													color: "#002550",
													fontSize: { xs: "20px", lg: "28px" },
												}}
											>
												{x.name}
											</Typography>
											<Typography
												sx={{
													display: { xs: "block", lg: "none" },
													color: "#1A1A1A",
													fontWeight: "400",
													fontSize: "16px",
													opacity: "0.4",
													fontFamily: "Open Sans, sans-serif",
												}}
											>
												{x.role}
											</Typography>
											<Typography
												sx={{
													opacity: "0.6",
													color: "#1A1A1A",
													fontFamily: "Open Sans, sans-serif",
												}}
											>
												{x.description}
											</Typography>
										</CardContent>
										<CardActions
											sx={{
												display: "flex",
												justifyContent: "flex-end",
												padding: "0px",
												position: "absolute",
												bottom: "19.5px",
												right: "25px",
											}}
										>
											<Button variant='transparent' sx={{ padding: "0" }}>
												<Typography
													sx={{
														fontFamily: "Open Sans, sans-serif",
														fontWeight: "600",
														opacity: "0.6",
													}}
												>
													View More
												</Typography>
											</Button>
										</CardActions>
									</Card>
								)
							}
					  })
					: teamMembers.map((x) => (
							<Card
								key={x.name}
								variant='outlined'
								sx={{
									position: "relative",
									height: { xs: "515px", lg: "592px" },
									width: { xs: "360px", lg: "455px" },
									padding: { xs: "15px", lg: "24px" },
									boxhadow: "0px 0px 4px rgba(0, 0, 0, 0.3)",
								}}
							>
								<CardMedia
									sx={{
										display: "flex",
										bgcolor: "#1F1F1F",
										borderRadius: "10px",
										justifyContent: "center",
										alignItems: "flex-end",
										width: "100%",
										height: { xs: "245px", lg: "319px" },
									}}
								>
									<img
										style={{ height: "100%", width: "100%" }}
										src={x.image}
										alt={x.name}
									/>
								</CardMedia>
								<CardContent
									sx={{
										padding: "0px",
										mt: "20px",
										display: "flex",
										flexDirection: "column",
										gap: { xs: "12px", lg: "5px" },
									}}
								>
									<Typography
										variant='h4'
										sx={{
											fontFamily: "Open Sans, sans-serif",
											color: "#002550",
											fontSize: { xs: "20px", lg: "28px" },
										}}
									>
										{x.name}
									</Typography>
									<Typography
										sx={{
											display: { xs: "block", lg: "none" },
											color: "#1A1A1A",
											fontWeight: "400",
											fontSize: "16px",
											opacity: "0.4",
											fontFamily: "Open Sans, sans-serif",
										}}
									>
										{x.role}
									</Typography>
									<Typography
										sx={{
											opacity: "0.6",
											color: "#1A1A1A",
											fontFamily: "Open Sans, sans-serif",
										}}
									>
										{x.description}
									</Typography>
								</CardContent>
								<CardActions
									sx={{
										display: "flex",
										justifyContent: "flex-end",
										padding: "0px",
										position: "absolute",
										bottom: "19.5px",
										right: "25px",
									}}
								>
									<Button variant='transparent' sx={{ padding: "0" }}>
										<Typography
											sx={{
												fontFamily: "Open Sans, sans-serif",
												fontWeight: "600",
												opacity: "0.6",
											}}
										>
											View More
										</Typography>
									</Button>
								</CardActions>
							</Card>
					  ))}
			</Box>
		</Container>
	)
}
export default OurTeam
