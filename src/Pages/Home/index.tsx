import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Footer } from "../../componets/Footer";
import { Header } from "../../componets/Header";

export const Home: React.FC<{}> = (props) => {
	return (
		<>
			<Header fixed={true} />

			<Box
				sx={{
					backgroundImage:
						"url(./src/assets/chess/pexels-george-becker-112854.jpg)",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundColor: "#cdd1c4",
					backgroundBlendMode: "hard-light"
				}}
			>
				<Box
					component="section"
					sx={{
						// backgroundImage:
						// 	"url(src/assets/chess/pexels-george-becker-112854.jpg)",
						// backgroundSize: "cover",
						// backgroundRepeat: "no-repeat",
						width: "100%",
						margin: "auto",
						py: 20,
						height: "80vh" // kevin says avoid setting height instead set paddingy to automatically get centered text !
					}}
				>
					<Typography variant="h1" align="center">
						{/* #FFD700 */}
						Chess
					</Typography>
					<Button variant="contained" color="secondary">
						Click me !
					</Button>
				</Box>
			</Box>
			<Footer />
		</>
	);
};
