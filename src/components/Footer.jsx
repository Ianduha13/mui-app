import { Box, Container, List, Typography } from "@mui/material"
import LinkedinLogo from "../assets/imgs/INREGlobal-JTS/Icons/Linkedin.png"
import FacebookLogo from "../assets/imgs/INREGlobal-JTS/Icons/Vector-1.png"
import TwitterLogo from "../assets/imgs/INREGlobal-JTS/Icons/Vector-2.png"
import InstagramLogo from "../assets/imgs/INREGlobal-JTS/Icons/Vector-3.png"
import PhoneLogo from "../assets/imgs/INREGlobal-JTS/Icons/Vector-4.png"
import EmailLogo from "../assets/imgs/INREGlobal-JTS/Icons/Vector-5.png"
import CompanyLogo from "../assets/imgs/INREGlobal-JTS/Icons/10.svg"
import { Link } from "react-router-dom"

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
	return (
		<Container
			maxWidth={false}
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "380px",
				bgcolor: "primary.main",
				width: "100vw",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-around",
					paddingTop: "32px",
					flexGrow: 1,
					paddingX: "32px",
				}}
			>
				<Box sx={{ w: "107px", h: "107px", objectFit: "cover" }}>
					<img style={{ width: "107px" }} src={CompanyLogo} />
				</Box>
				<Box sx={{ w: 300 }}>
					<List>
						<Typography variant='h3' color={"white"} sx={{ mb: "25px" }}>
							Company
						</Typography>
						{companyLinks.map((x) => (
							<Link
								to={x.href}
								style={{ textDecoration: "none" }}
								key={x.text}
								underline='none'
							>
								<Typography variant='h6' color={"white"} sx={{ mb: "25px" }}>
									{x.text}
								</Typography>
							</Link>
						))}
					</List>
				</Box>
				<Box sx={{ w: 300, display: "flex" }}>
					<List>
						<Typography variant='h3' color={"white"} sx={{ mb: "25px" }}>
							Useful Links
						</Typography>
						<Link to={"/"} style={{ textDecoration: "none" }} underline='none'>
							<Typography variant='h6' color={"white"}>
								Blogs
							</Typography>
						</Link>
					</List>
				</Box>
				<Box sx={{ w: 300 }}>
					<List>
						{contactInfo.map((info) => (
							<Box
								key={info.title}
								sx={{ display: "flex", alignItems: "center", mt: "28px" }}
							>
								<Box>
									<img src={info.icon} alt={`${info.title} logo`} />
								</Box>
								<Box sx={{ ml: "20px" }}>
									<Typography variant='h5' color='white'>
										{info.title}
									</Typography>
									<Typography color='white'>{info.text}</Typography>
								</Box>
							</Box>
						))}
					</List>
				</Box>
			</Box>
			<Box
				sx={{ display: "flex", justifyContent: "space-between", mr: "132px" }}
			>
				<Typography color={"white"} sx={{ pl: "137px", pb: "23px" }}>
					Copyright 2023. Designed by INRE Global
				</Typography>
				<Box sx={{ display: "flex", gap: "1rem" }}>
					{SocialBarData.map((x) => (
						<Box
							sx={{ display: "flex", gap: "0.25rem", cursor: "pointer" }}
							key={x.text}
						>
							<Box>
								<img src={x.logo} alt='logo' />
							</Box>
							<Typography variant='h6' color={"white"}>
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
