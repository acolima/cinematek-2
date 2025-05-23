import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import PageRoutes from "./routes";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: ["Poppins", "Koulen"].join(",")
	}
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ToastContainer />
			<PageRoutes />
		</ThemeProvider>
	);
}

export default App;
