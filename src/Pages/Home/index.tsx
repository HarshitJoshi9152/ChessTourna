import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Footer } from "../../componets/Footer";
import { Header } from "../../componets/Header";

const CallToAction: React.FC<{}> = () => {
	return (
		<Box
			sx={{
				display: "flex"
			}}
		>
			<Button variant="contained" color="secondary">
				Click me !
			</Button>
		</Box>
	);
};

export const Home: React.FC<{}> = (props) => {
	return (
		<>
			<Header fixed={true} />

			<Box
				sx={{
					// mt: 10,
					backgroundImage:
						"url(./src/assets/chess/pexels-george-becker-112854.jpg)",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundColor: "#cdd1c4",
					backgroundBlendMode: "hard-light",
					// parallax effect
					backgroundAttachment: { xs: "scroll", md: "fixed" },
					backgroundPosition: "center",
					height: "60vh" // kevin says avoid setting height instead set paddingy to automatically get centered text !
				}}
			>
				<Box
					component="section"
					sx={{
						// Do i Really need this nested Box lmao ??
						width: "100%",
						margin: "auto",
						py: 20,
						display: "grid",
						placeItems: "center"
					}}
				>
					<Typography variant="h2" component={"h1"} align="center">
						{/* #FFD700 */}
						World Chess Tournament
					</Typography>
					<Typography variant="h5" sx={{ mt: { xs: 2, md: 1 } }}>
						Compete against the very best
					</Typography>
					<CallToAction />
				</Box>
			</Box>
			<Footer />
		</>
	);
};
