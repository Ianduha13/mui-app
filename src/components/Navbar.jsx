import { Stack, AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import CompanyMainLogo from "../assets/imgs/INREGlobal-JTS/Icons/Group 36901.png"
import { Link } from "react-router-dom"

const Navbar = () => {
	const menuLinks = [
		{ label: "Home", path: "/" },
		{ label: "Our Offerings", path: "/" },
		{ label: "Our Team", path: "/" },
		{ label: "Contact Us", path: "/" },
		{ label: "Blogs", path: "/" },
	]

	return (
		<AppBar sx={{ bgcolor: "white", display: "flex" }}>
			<Toolbar
				sx={{
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
				<Box sx={{ mt: "61px", display: { xs: "none", lg: "flex" } }}>
					<Stack direction={{ xs: "column", lg: "row" }}>
						{menuLinks.map((menuItem, index) => (
							<Button
								key={index}
								component={Link}
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
								to={menuItem.path}
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
						))}
					</Stack>
				</Box>
				<Box sx={{ mr: "79px", mt: "48px" }}>
					<Button variant='contained'>
						<Typography>Register Now</Typography>
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
