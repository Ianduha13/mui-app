import { Box, Typography, Container } from "@mui/material"
import image273 from "../assets/imgs/INREGlobal-JTS/image 27-3.png"
import image274 from "../assets/imgs/INREGlobal-JTS/image 27-4.png"
import image275 from "../assets/imgs/INREGlobal-JTS/image 27-5.png"
import { useState } from "react"
import CarrouselButtons from "./CarrouselButtons"
import BlogsCard from "./BlogsCard"

const Blogs = ({ width }) => {
	const [indexShown, setIndexShown] = useState(0)
	const blogs = [
		{
			theme: "Real Estate, Analysis",
			title: "Guide for personal property Buying ",
			author: "Admin",
			date: "09 jun 2022",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
			image: image273,
		},
		{
			theme: "Real Estate, Analysis",
			title: "Guide for personal property Buying ",
			author: "Admin",
			date: "09 jun 2022",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
			image: image274,
		},
		{
			theme: "Real Estate, Analysis",
			title: "Guide for personal property Buying ",
			author: "Admin",
			date: "09 jun 2022",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
			image: image275,
		},
	]
	return (
		<Container
			maxWidth='none'
			id='blogs'
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				mb: "35px",
				bgcolor: "#F1F1F1",
				py: "35px",
			}}
		>
			<Box
				sx={{
					borderBottom: 3,
					mb: "17px",
					borderColor: "#01244A",
				}}
			>
				<Typography
					variant='h4'
					sx={{
						px: "24px",
						pb: { xs: "5px", lg: "22px" },
						fontSize: { xs: "20px", lg: "28px" },
						color: "#01244A",
					}}
				>
					Blogs
				</Typography>
			</Box>
			<Box sx={{ display: "flex", gap: "46px" }}>
				{width <= 975
					? blogs.map((x, i) => {
							if (i === indexShown) {
								return (
									<BlogsCard
										indexShown={indexShown}
										setIndexShown={setIndexShown}
										x={x}
										haveCarrosel={true}
									/>
								)
							}
					  })
					: blogs.map((x, i) => (
							<BlogsCard x={x} key={i} haveCarrosel={false} />
					  ))}
			</Box>
		</Container>
	)
}
export default Blogs
