import {
	Box,
	Button,
	Container,
	ListItem,
	Typography,
	TypographyProps
} from "@mui/material";
import React, { Key } from "react";

const HEADER_ITEMS = ["Github", "Donate", "Login"];
interface HeaderProps {
	fixed: boolean;
}

interface HeaderItemProps {
	children: React.ReactNode;
	id: Key;
	options: TypographyProps;
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
				position: fixed ? "fixed" : "block", // sticky vs fixed
				top: 0,
				left: "50%",
				transform: "translate(-50%, -0%)",
				width: "100%",
				// backgroundColor: "white",
				py: 1,
				backdropFilter: "blur(5px)"
			}}
		>
			<Container
				// maxWidth={"sm"}
				sx={{
					display: "flex",
					justifyContent: "space-around"
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						textAlign: "center"
					}}
					gap={2}
				>
					{HEADER_ITEMS.map((item) => (
						<HeaderItem id={item} options={{ variant: "h5" }}>
							{item}
						</HeaderItem>
					))}
				</Box>
			</Container>
		</Box>
	);
};
