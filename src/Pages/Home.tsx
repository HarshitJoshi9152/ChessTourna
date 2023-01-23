import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Footer } from "../componets/Footer";
import { Header } from "../componets/Header";

export const Home: React.FC<{}> = (props) => {
	return (
		<Container>
			<Box columnGap={10}>
				<Header />
				<Box
					sx={
						{
							// p: 4
							// display: "flex",
							// justifyContent: "center"
						}
					}
				>
					<Typography variant="h1" align="center">
						{/* #FFD700 */}
						Chess
					</Typography>
					<Button variant="contained" color="secondary">
						Click me !
					</Button>
				</Box>
				<Footer />
			</Box>
		</Container>
	);
};
