import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { Box } from "@mui/material"

const CarrouselButtons = ({ indexShown, setIndexShown }) => {
	return (
		<>
			{indexShown > 0 && (
				<Box
					sx={{
						position: "absolute",
						left: "0px",
						top: "40%",
						width: "60px",
						height: "60px",
						bgcolor: "rgba(0, 0, 0, 0.3)",
						borderRadius: "9999px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					onClick={() => indexShown > 0 && setIndexShown(indexShown - 1)}
				>
					<ArrowBackIosIcon sx={{ color: "white" }} />
				</Box>
			)}
			{indexShown < 2 && (
				<Box
					sx={{
						position: "absolute",
						right: "0px",
						top: "40%",
						width: "60px",
						height: "60px",
						bgcolor: "rgba(0, 0, 0, 0.3)",
						borderRadius: "9999px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					onClick={() => indexShown < 2 && setIndexShown(indexShown + 1)}
				>
					<ArrowForwardIosIcon sx={{ color: "white" }} />
				</Box>
			)}
		</>
	)
}
export default CarrouselButtons
