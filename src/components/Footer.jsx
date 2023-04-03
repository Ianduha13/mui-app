import { Box, Container, List, Typography } from "@mui/material"
import LinkedinLogo from "../assets/imgs/INREGlobal-JTS/Icons/Linkedin.png"
import FacebookLogo from "../assets/imgs/INREGlobal-JTS/Icons/Vector-1.png"
import TwitterLogo from "../assets/imgs/INREGlobal-JTS/Icons/Vector-2.png"
import InstagramLogo from "../assets/imgs/INREGlobal-JTS/Icons/Vector-3.png"
import PhoneLogo from "../assets/imgs/INREGlobal-JTS/Icons/Vector-4.png"
import EmailLogo from "../assets/imgs/INREGlobal-JTS/Icons/Vector-5.png"
import CompanyLogo from "../assets/imgs/INREGlobal-JTS/Icons/10.svg"
import { Link } from "react-router-dom"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { useState } from "react"

const SocialBarData = [
	{ logo: LinkedinLogo, text: "LinkedIn" },
	{ logo: FacebookLogo, text: "Facebook" },
	{ logo: TwitterLogo, text: "Twitter" },
	{ logo: InstagramLogo, text: "Instagram" },
]
const companyLinks = [
	{ text: "Home", href: "#" },
	{ text: "Our Team", href: "#" },
	{ text: "Contact Us", href: "#" },
	{ text: "Blogs", href: "#" },
]

const contactInfo = [
	{ icon: EmailLogo, title: "Email", text: "support@inreglobal.com" },
	{ icon: PhoneLogo, title: "Phone", text: "+91 | 7019305889" },
]

const Footer = () => {
	const [isVisibleCompany, setIsVisibleCompany] = useState(false)
	const [isVisibleUseful, setIsVisibleUseful] = useState(false)
	return (
		<Container
			maxWidth={false}
			sx={{
				display: "flex",
				flexDirection: "column",
				height: { xs: "auto", lg: "380px" },
				bgcolor: "primary.main",
				width: "100vw",
				px: { xs: "30px", lg: "0" },
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", lg: "row" },
					justifyContent: "space-around",
					paddingTop: "32px",
					flexGrow: 1,
					paddingX: { xs: "0", lg: "32px" },
				}}
			>
				<Box
					sx={{
						width: "104px",
						objectFit: "contain",
						mb: { xs: "32px", lg: 0 },
						mt: { xs: "10px", lg: 0 },
					}}
				>
					<img style={{ width: "100%" }} src={CompanyLogo} />
				</Box>
				<Box sx={{ w: 300 }}>
					<Box>
						<Typography
							variant='h3'
							color={"white"}
							onClick={() => {
								setIsVisibleCompany(!isVisibleCompany)
							}}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: { xs: "20px", lg: "25px" },
								fontSize: { xs: "20px", lg: "28px" },
								width: { xs: "100%", lg: "auto" },
								fontWeight: { xs: "400", lg: "600" },
							}}
						>
							Company{" "}
							<ArrowDropDownIcon
								sx={{ display: { xs: "inline-block", lg: "none" } }}
							/>
						</Typography>
						{companyLinks.map((x) => (
							<Link
								to={x.href}
								style={{ textDecoration: "none" }}
								key={x.text}
								underline='none'
							>
								<Typography
									variant='h6'
									color={"white"}
									sx={{
										display: {
											xs: isVisibleCompany ? "block" : "none",
											lg: "block",
										},
										mb: "20px",
									}}
								>
									{x.text}
								</Typography>
							</Link>
						))}
					</Box>
				</Box>
				<Box sx={{ w: 300 }}>
					<Box>
						<Typography
							variant='h3'
							color={"white"}
							onClick={() => {
								setIsVisibleUseful(!isVisibleUseful)
							}}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: { xs: "20px", lg: "25px" },
								fontSize: { xs: "20px", lg: "28px" },
								fontWeight: { xs: "400", lg: "600" },
								width: { xs: "100%", lg: "auto" },
							}}
						>
							Useful Links
							<ArrowDropDownIcon
								sx={{ display: { xs: "inline-block", lg: "none" } }}
							/>
						</Typography>
						<Link to={"/"} style={{ textDecoration: "none" }} underline='none'>
							<Typography
								variant='h6'
								color={"white"}
								sx={{
									display: {
										xs: isVisibleUseful ? "block" : "none",
										lg: "block",
									},
									mb: "20px",
								}}
							>
								Blogs
							</Typography>
						</Link>
					</Box>
				</Box>
				<Box sx={{ w: 300 }}>
					<Box
						sx={{
							display: { xs: "flex", lg: "block" },
							flexDirection: "column",
							gap: "20px",
						}}
					>
						{contactInfo.map((info) => (
							<Box
								key={info.title}
								sx={{
									display: "flex",
									alignItems: "center",
									mt: { xs: "0", lg: "28px" },
								}}
							>
								<Box sx={{ width: { xs: "24px", lg: "40px" } }}>
									<img
										style={{ width: "100%" }}
										src={info.icon}
										alt={`${info.title} logo`}
									/>
								</Box>
								<Box sx={{ ml: { xs: "15px", lg: "20px" } }}>
									<Typography
										color='white'
										sx={{
											fontSize: { xs: "20px", lg: "24px" },
											fontWeight: { xs: "400", lg: "700" },
										}}
									>
										{info.title}
									</Typography>
									<Typography
										color='white'
										sx={{
											fontSize: "20px",
											fontWeight: "400",
										}}
									>
										{info.text}
									</Typography>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column-reverse", lg: "row" },
					justifyContent: "space-between",
					mr: { xs: "0", lg: "132px" },
				}}
			>
				<Typography
					sx={{
						pl: { xs: "0", lg: "137px" },
						pb: "23px",
						mt: { xs: "35px", lg: 0 },
						opacity: { xs: "0.5", lg: "1" },
						color: { xs: "#CCD3DC", lg: "white" },
						fontSize: { xs: "16px", lg: "18px" },
					}}
				>
					Copyright 2023. Designed by INRE Global
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", lg: "row" },
						gap: { xs: "24px", lg: "1rem" },
						mt: { xs: "20px", lg: "0" },
					}}
				>
					{SocialBarData.map((x) => (
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "0.25rem",
								cursor: "pointer",
							}}
							key={x.text}
						>
							<Box>
								<img src={x.logo} alt='logo' />
							</Box>
							<Typography
								sx={{
									color: "white",
									fontSize: { xs: "20px", lg: "18px" },
									fontWeight: { xs: "400", lg: "600" },
								}}
							>
								{x.text}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</Container>
	)
}
export default Footer
