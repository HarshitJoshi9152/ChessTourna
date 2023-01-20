import React from "react";

// components
import { Header } from "./componets/Header";
import { Footer } from "./componets/Footer";

// Pages
import { Home } from "./Pages/Home";

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
