import {
	Stack,
	AppBar,
	Box,
	Button,
	Toolbar,
	Typography,
	Menu,
} from "@mui/material"
import CompanyMainLogo from "../assets/imgs/INREGlobal-JTS/Icons/Group 36901.png"
import CompanyMobileLogo from "../assets/imgs/INREGlobal-JTS/LogoMobile.png"
import MenuIcon from "@mui/icons-material/Menu"
import { Link } from "react-router-dom"

const Navbar = () => {
	const menuLinks = [
		{ label: "Home", path: "/" },
		{ label: "Our Offerings", path: "#ourOfferings" },
		{ label: "Our Team", path: "#ourTeam" },
		{ label: "Contact Us", path: "#contactUs" },
		{ label: "Blogs", path: "#blogs" },
	]

	return (
		<AppBar sx={{ bgcolor: "white", display: "flex" }}>
			<Toolbar
				sx={{
					width: "100vw",
					display: "flex",
					height: { xs: "58px", lg: "108px" },
					justifyContent: "space-between",
					overflowX: "hidden",
				}}
			>
				<Box
					sx={{
						ml: "81px",
						mt: "24px",
						objectFit: "contain",
						display: { xs: "none", lg: "block" },
					}}
				>
					<img style={{ width: "64px" }} src={CompanyMainLogo} alt='mainlogo' />
				</Box>
				<Box
					sx={{
						objectFit: "contain",
						width: "24px",
						display: { xs: "block", lg: "none" },
						ml: "8px",
					}}
				>
					<MenuIcon sx={{ color: "#01244A", width: "100%" }} />
				</Box>
				<Box
					sx={{
						objectFit: "contain",
						width: "61px",
						display: { xs: "block", lg: "none" },
						ml: "64px",
					}}
				>
					<img
						style={{ width: "100%" }}
						src={CompanyMobileLogo}
						alt='mobilelogo'
					/>
				</Box>
				<Box sx={{ mt: "61px", display: { xs: "none", lg: "flex" } }}>
					<Stack direction={{ xs: "column", lg: "row" }}>
						{menuLinks.map((menuItem, index) => (
							<a href={menuItem.path} style={{ textDecoration: "none" }}>
								<Button
									key={index}
									sx={{
										borderRadius: "0",
										px: "20px",
										color: "#002550",
										boxSizing: "border-box",
										":hover": {
											borderBottom: "5px solid #002550",
											backgroundColor: "transparent",
										},
									}}
								>
									<Typography
										variant='h5'
										sx={{
											paddingBottom: "5px",
											fontSize: "18px",
											fontFamily: "Open Sans",
											fontWeight: "700",
										}}
									>
										{menuItem.label}
									</Typography>
								</Button>
							</a>
						))}
					</Stack>
				</Box>
				<Box
					sx={{
						mr: { xs: 0, lg: "79px" },
						mt: { xs: 0, lg: "48px" },
						w: { xs: "110px", lg: "167px" },
						h: { xs: "35px", lg: "48px" },
					}}
				>
					<Button variant='contained' sx={{ w: "100%", h: "100%" }}>
						<Typography>Register Now</Typography>
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
