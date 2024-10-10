import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Movie, Search } from "./pages/index";

function PageRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/movies/:id" element={<Movie />} />
				<Route path="/search" element={<Search />} />
			</Routes>
		</BrowserRouter>
	);
}

export default PageRoutes;
