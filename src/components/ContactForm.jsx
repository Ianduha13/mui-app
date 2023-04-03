import {
	Paper,
	Box,
	Typography,
	FormGroup,
	Autocomplete,
	TextField,
	Button,
	Grid,
} from "@mui/material"
import ContactUsImg from "../assets/imgs/INREGlobal-JTS/Happy announcement-pana.png"
import { Countries } from "./constants/Countries"
import { MuiTelInput } from "mui-tel-input"
import { useState } from "react"

const ContactForm = () => {
	const [phone, setPhone] = useState("")
	const stages = ["I have booked, but my reservation is not done"]
	const handleChange = (newPhone) => {
		setPhone(newPhone)
	}
	return (
		<Box
			sx={{
				width: { xs: "360px", lg: "1488px" },
				height: { xs: "auto", lg: "518px" },
				mt: { xs: "0", lg: "35px" },
				mb: "67px",
				mx: { xs: "15px", lg: "auto" },
				py: { xs: "0", lg: "58px" },
				px: { xs: "0", lg: "64px" },
				display: "flex",
				justifyContent: "space-between",
				flexDirection: { xs: "column-reverse", lg: "row" },
				boxShadow: { xs: "none", lg: "rgba(0, 0, 0, 0.05) 0px 0px 10px" },
			}}
		>
			<Box>
				<Typography
					variant='h5'
					sx={{
						mb: { xs: "20px", lg: "28px" },
						mt: { xs: "20px", lg: "0" },
						fontSize: { xs: "20px", lg: "24px" },
					}}
				>
					Get In Touch With Us To Conect
				</Typography>
				<Box>
					<Typography
						variant='h6'
						sx={{ fontWeight: "600", display: { xs: "none", lg: "block" } }}
					>
						Contact Us
					</Typography>
					<FormGroup sx={{ mt: "29px" }}>
						<Grid
							container
							px={{ xs: "5px", lg: 0 }}
							columnSpacing={{ xs: 0, lg: "24px" }}
							sx={{ width: { xs: "100%", lg: "724px" } }}
							rowSpacing={{ xs: "20px", lg: "48px" }}
						>
							<Grid item xs={12} lg={6}>
								<TextField
									label='Full name'
									sx={{
										width: "350px",
										height: "48px",
										mr: { xs: "0", lg: "24px" },
									}}
								/>
							</Grid>

							<Grid item xs={12} lg={6}>
								<TextField
									placeholder='example@gmail.com'
									label='Email address'
									helperText='Please enter a valid e-mail'
									sx={{
										width: "350px",
										height: "48px",
										"@media (max-width: 768px)": {
											"& .MuiFormHelperText-root": {
												display: "none",
											},
										},
									}}
								/>
							</Grid>
							<Grid item xs={12} lg={6}>
								<MuiTelInput
									defaultCountry='IN'
									placeholder={"9876543210"}
									value={phone}
									onChange={handleChange}
									sx={{ width: "350px", height: "48px" }}
								/>
							</Grid>

							<Grid item xs={12} lg={6}>
								<Autocomplete
									options={Countries}
									getOptionLabel={(option) => option.label}
									sx={{ width: "350px", height: "48px" }}
									renderOption={(props, option) => (
										<Box
											component='li'
											sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
											{...props}
										>
											<img
												loading='lazy'
												width='20'
												src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
												srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
												alt=''
											/>
											{option.label} ({option.code}) +{option.phone}
										</Box>
									)}
									renderInput={(params) => (
										<TextField
											{...params}
											label='Country'
											sx={{ width: "350px", height: "48px" }}
											inputProps={{
												...params.inputProps,
												autoComplete: "new-password",
											}}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} lg={6}>
								<Autocomplete
									disablePortal
									options={stages}
									sx={{ width: "350px", height: "48px" }}
									renderInput={(params) => (
										<TextField {...params} label='Stage' />
									)}
								/>
							</Grid>
						</Grid>
					</FormGroup>
					<Button
						variant='contained'
						sx={{
							mt: "28px",
							width: "350px",
							mx: { xs: "5px", lg: "0" },
							height: "42px",
						}}
					>
						Submit
					</Button>
				</Box>
			</Box>
			<Box
				sx={{
					px: "0",
					display: "flex",
					width: { xs: "360px", lg: "447px" },
				}}
			>
				<img
					style={{
						borderRadius: "5px",
						objectFit: "contain",
						width: "100%",
					}}
					src={ContactUsImg}
					alt='contactus'
				/>
			</Box>
		</Box>
	)
}
export default ContactForm
