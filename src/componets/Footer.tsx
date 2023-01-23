import {
	Box,
	Container,
	Divider,
	List,
	ListItem,
	ListItemText,
	Paper,
	Typography
} from "@mui/material";
import React from "react";

interface FooterProps {
	Sponsors?: Array<{
		img: HTMLImageElement;
		// HoverImg: HTMLImageElement,
		url: string;
	}>;
}

interface contentsType {
	heading: string;
	description: Array<string>;
}

const contents: Array<contentsType> = [
	{
		heading: "Title 1",
		description: [
			"Lorem ipsum dolor sit,",
			"amet consectetur adipisicing elit.",
			"Voluptatibus, soluta."
		]
	},
	{
		heading: "Title 2",
		description: [
			"Lorem ipsum dolor sit,",
			"amet consectetur adipisicing elit.",
			"Voluptatibus, soluta."
		]
	},
	{
		heading: "Title 3",
		description: [
			"Lorem ipsum dolor sit,",
			"amet consectetur adipisicing elit.",
			"Voluptatibus, soluta."
		]
	}
];

export const Footer: React.FC<FooterProps> = () => {
	return (
		// <div className="footer">
		// 	<div className="3_flex">
		// 		<div className="Developers_github_etc">
		// 			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		// 			Possimus, tempora?
		// 		</div>
		// 		<div className="sponsors">
		// 			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		// 			Possimus, tempora?
		// 		</div>
		// 		<div className="sitemap">
		// 			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		// 			Possimus, tempora?
		// 		</div>
		// 	</div>
		// </div>
		<Box
			sx={{
				display: "flex",
				flexDirection: {
					xs: "column",
					md: "row"
				},
				justifyContent: "space-between"
			}}
			gap={{ xs: 0.5, lg: 0 }}
		>
			{contents.map(({ heading, description }) => {
				return (
					<>
						<Paper
							sx={{
								p: 3,
								// textAlign: "center",
								width: { xs: "auto", md: "500px" }
							}}
							variant="outlined"
						>
							<Typography variant="h5">{heading}</Typography>
							<List>
								{description.map((desc) => (
									<ListItem sx={{ p: 0 }}>
										<ListItemText
										// sx={{ textAlign: "Left" }}
										>
											<Typography>{desc}</Typography>
										</ListItemText>
									</ListItem>
								))}
							</List>
						</Paper>
						{/* <Divider
								orientation="vertical"
								variant="middle"
							></Divider> */}
					</>
				);
			})}
		</Box>
	);
};
