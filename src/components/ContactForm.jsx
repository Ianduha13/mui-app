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
		<Paper
			elevation={2}
			sx={{
				width: "1488px",
				height: "518px",
				marginX: "auto",
				mt: "35px",
				mb: "67px",
				py: "58px",
				px: "64px",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<Box>
				<Typography variant='h5' sx={{ mb: "28px" }}>
					Get In Touch With Us To Conect
				</Typography>
				<Box>
					<Typography variant='h6' sx={{ fontWeight: "600" }}>
						Contact Us
					</Typography>
					<FormGroup sx={{ flexGrow: "1", mt: "29px" }}>
						<Grid
							container
							columns={2}
							columnSpacing={"24px"}
							rowSpacing={"48px"}
						>
							<Grid item>
								<TextField
									label='Full name'
									sx={{ width: "350px", height: "48px" }}
								/>
							</Grid>

							<Grid item>
								<MuiTelInput
									defaultCountry='IN'
									placeholder={"9876543210"}
									value={phone}
									onChange={handleChange}
									sx={{ width: "350px", height: "48px" }}
								/>
							</Grid>

							<Grid item>
								<TextField
									placeholder='example@gmail.com'
									label='Email address'
									helperText='Please enter a valid e-mail'
									sx={{ width: "350px", height: "48px" }}
								/>
							</Grid>

							<Grid item>
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
							<Grid item>
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
						sx={{ mt: "28px", width: "350px", height: "42px" }}
					>
						Submit
					</Button>
				</Box>
			</Box>
			<Box>
				<img src={ContactUsImg} alt='contactus' />
			</Box>
		</Paper>
	)
}
export default ContactForm
