import { Box, Button, Container, Typography } from "@mui/material";

export const Header = () => {
	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between"
				}}
				// mt={2}
			>
				<Box>
					<Typography variant="h5">Logo</Typography>
				</Box>
				<Box sx={{ display: "flex" }} justifyContent={"center"} gap={2}>
					<Typography
						variant="h5"
						sx={{
							":hover": {
								// backgroundColor: "primary.main",
								// color: "secondary.main",
								textDecoration: "underline solid primary"
							}
						}}
					>
						Github
					</Typography>
					<Typography
						variant="h5"
						sx={{
							":hover": {
								// backgroundColor: "primary.main",
								// color: "secondary.main",
								textDecoration: "underline solid #FFD700"
							}
						}}
					>
						Donate
					</Typography>
					<Typography
						variant="h5"
						sx={{
							":hover": {
								// backgroundColor: "primary.main",
								// color: "secondary.main",
								textDecoration: "underline solid #FFD700"
							}
						}}
					>
						Login
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
