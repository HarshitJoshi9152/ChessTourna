import {
	Box,
	Button,
	Container,
	ListItem,
	Typography,
	TypographyProps,
	IconButton,
	Icon
} from "@mui/material";
import React, { Key } from "react";

const HEADER_ITEMS = ["Github", "Donate", "Login"];
interface HeaderProps {
	fixed: boolean;
}

interface HeaderItemProps {
	children: React.ReactNode;
	id: Key;
	options?: TypographyProps;
}

const HeaderItem: React.FC<HeaderItemProps> = (props) => {
	const { children, id, options } = props;
	return (
		<Typography
			variant="h6"
			sx={{
				":hover": {
					textDecoration: "underline solid #ffd700",
					cursor: "pointer"
				}
			}}
			{...options}
		>
			{children}
		</Typography>
	);
};

export const Header: React.FC<HeaderProps> = ({ fixed = false }) => {
	return (
		<Box
			sx={{
				position: { sm: "fixed" }, // sticky vs fixed
				top: 0,
				left: "50%",
				transform: { sm: "translate(-50%, 0)" },
				width: "100%",
				py: 3,
				overflow: "hidden"
				// background: "transparent",
				// backdropFilter: "blur(2px)", // nah make it blur on scroll
				// transition: "0.5s all"
			}}
		>
			{/* <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}> */}
			{/* https://mdbootstrap.com/docs/standard/navigation/navbar/examples-and-customization/ */}
			<Container
				// maxWidth={"sm"}
				sx={{
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						// alignContent: "center"
						alignItems: "center"
					}}
				>
					<img
						src="./src/assets/chess/crown.png"
						width="30px"
						height="30px"
						style={{
							position: "relative",
							top: "-10%",
							// damn https://codepen.io/sosuke/pen/Pjoqqp
							filter: "invert(74%) sepia(93%) saturate(874%) hue-rotate(359deg) brightness(102%) contrast(104%)"
						}}
					></img>
					<Typography
						variant="h5"
						component={"p"}
						sx={{ ml: { sm: 1 } }}
					>
						WCT
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						// textAlign: "center",
						alignItems: "center"
					}}
					gap={6}
				>
					{HEADER_ITEMS.map((item) => (
						<HeaderItem id={item}>{item}</HeaderItem>
					))}
				</Box>
				<Box>
					<Button variant="contained" color="success">
						Spectate
					</Button>
				</Box>
			</Container>
		</Box>
	);
};
