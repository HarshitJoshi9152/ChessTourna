import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// its like a react-context
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

// const theme = createTheme({
// 	palette: {
// 		primary: {
// 			main: "#1e2022",
// 			// main: "#222",
// 			dark: "#111",
// 			light: "#444",
// 			contrastText: "#fff"
// 		},
// 		secondary: {
// 			main: "#F8F8FF",
// 			dark: "#fff",
// 			light: "#f5f5f5",
// 			contrastText: "#222"
// 		}
// 	},
// 	typography: {
// 		h1: {
// 			fontWeight: 800
// 		},
// 		h2: {
// 			fontWeight: 600
// 		},
// 		h3: {
// 			fontWeight: 600
// 		},
// 		h4: {
// 			fontWeight: 600
// 		},
// 		h5: {
// 			fontWeight: 600
// 		},
// 		h6: {
// 			fontWeight: 600
// 		}
// 	}
// });

const theme = createTheme({
	typography: {
		h1: {
			fontWeight: 800
		},
		h2: {
			fontWeight: 600
		},
		h3: {
			fontWeight: 600
		},
		h4: {
			fontWeight: 600
		},
		h5: {
			fontWeight: 600
		},
		h6: {
			fontWeight: 600
		}
	}
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>
);
