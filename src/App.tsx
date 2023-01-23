import React from "react";

// components
import { Header } from "./componets/Header";
import { Footer } from "./componets/Footer";

// Pages
import { Home } from "./Pages/Home";

import { Container, Typography } from "@mui/material";

import { Routes, Link, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home></Home>} />
			<Route
				path="/register"
				element={<Typography>Registration Form</Typography>}
			/>
		</Routes>
	);
}

// https://github.com/microsoft/vscode/issues/126914
// https://github.com/microsoft/TypeScript/issues/44657
// https://www.youtube.com/watch?v=fzxEECHnsvU

export default App;
