import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
	palette: {
		primary: {
			main: "#01244A",
		},
	},
	typography: {
		fontFamily: "Open Sans, sans-serif",
		button: {
			textTransform: "none",
		},
		h1: { fontSize: "34px", fontWeight: 600 },
		h2: { fontSize: "32px", fontWeight: 600 },
		h3: { fontSize: "30px", fontWeight: 600 },
		h4: { fontSize: "28px", fontWeight: 600 },
		h5: { fontSize: "24px", fontWeight: 600 },
		h6: { fontSize: "18px", fontWeight: 300 },
		p: { fontSize: "16px", fontWeight: 300 },
	},
})

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
