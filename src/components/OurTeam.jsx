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

const OurTeam = () => {
	const teamMembers = [
		{
			name: "Brajesh Pathak",
			description:
				"A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azur...",
			//e Capital Advisors Private Limited. He has also been part of the managing committee and execution committee of Azure Capital (100 Crore realty focused funds), he has been part of the execution committee of various special purpose vehicle of investee companies for plotted development, villa projects, and apartments including development work & construction management. He is deeply involved in the fund raising process including investors relationship. Retail sales, NRI relationship handling for real estates advisory. Recently, Lead the process of fund raising of various startups from seed round to series- B round.",
			image: Member1Img,
		},
		{
			name: "Deepak Shukla",
			description:
				"Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of...",
			// Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications.",
			image: Member3Img,
		},
		{
			name: "Alok Kumar Singh",
			description:
				"Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys...",
			// BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management.",
			image: Member2Img,
		},
	]
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				mb: "35px",
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
					}}
				>
					Our Team Members
				</Typography>
			</Box>
			<Box sx={{ display: "flex", gap: "46px" }}>
				{teamMembers.map((x) => (
					<Card
						key={x.name}
						variant='outlined'
						sx={{ height: "592px", width: "455px", padding: "24px" }}
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
							<Typography variant='h4'>{x.name}</Typography>
							<Typography
								sx={{
									mt: "20px",
									opacity: "0.6",
									color: "#1A1A1A",
								}}
							>
								{x.description}
							</Typography>
						</CardContent>
						<CardActions
							sx={{
								display: "flex",
								justifyContent: "flex-end",
								width: "100%",
							}}
						>
							<Button variant='transparent' sx={{ fontWeight: "400" }}>
								View More
							</Button>
						</CardActions>
					</Card>
				))}
			</Box>
		</Container>
	)
}
export default OurTeam
