import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const styles = {
	backdrop: {
		opacity: "0.6",
		width: "100%",
		height: "200px"
	},
	noBackdrop: {
		width: "100%",
		height: "200px"
	},
	icons: {
		fontSize: "2.5em",
		cursor: "pointer",
		color: "#fff"
	}
};

const Page = styled(Box)({
	display: "flex",
	alignItems: "center",
	width: "100%",
	height: "100vh",
	boxSizing: "border-box",
	margin: "0 auto",
	"@media (max-width: 600px)": {
		margin: "0",
		width: "100%",
		height: "100%",
		flexDirection: "column"
	},
	"@media (max-width: 900px)": {
		width: "90%"
	}
});

const Poster = styled(Box)({
	width: "300px",
	display: "flex",
	marginLeft: "60px",
	"@media (max-width: 600px)": {
		width: "200px",
		position: "absolute",
		zIndex: "1",
		top: 25,
		justifyContent: "center",
		marginLeft: 0
	}
});

const ArrowBackButton = styled(Button)({
	position: "absolute",
	top: "10px",
	left: "10px"
});

const MovieInfo = styled(Box)({
	margin: "10px",
	padding: "10px",
	height: "450px",
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	rowGap: "20px",
	alignContent: "flex-start",
	background: "rgb(0, 0, 0, 0.5)",
	"@media (max-width: 600px)": {
		background: "none",
		marginTop: "70px",
		padding: 0
	}
});

const Title = styled(Box)({
	marginTop: "10px",
	gridColumn: "1 / -1",
	fontFamily: "Poppins",
	fontSize: "32px",
	fontWeight: "500",
	textTransform: "uppercase",
	boxSizing: "border-box",
	display: "flex",
	gap: "20px",
	alignItems: "center",
	"@media (max-width: 600px)": {
		fontSize: "16px"
	}
});

const Genres = styled(Box)({
	display: "flex",
	gap: "20px"
});

const Providers = styled(Box)({
	display: "flex",
	gap: "15px",
	flexWrap: "wrap",
	position: "absolute",
	right: 30
});

const Overview = styled(Typography)({
	width: "85%",
	textAlign: "justify",
	fontFamily: "Poppins",
	fontSize: "16px",
	boxSizing: "border-box"
});

const Runtime = styled(Typography)({
	width: "85%",
	fontFamily: "Poppins",
	fontSize: "12px"
});

const ReleaseDate = styled(Typography)({
	width: "85%",
	fontFamily: "Poppins",
	fontSize: "12px"
});

const Backdrops = styled(Box)({
	gridColumn: "1 / -1",
	height: "200px",
	display: "flex",
	alignItems: "center",
	gap: "10px",
	overflowX: "scroll",
	overflowY: "hidden",
	"::-webkit-scrollbar": {
		height: "10px"
	},
	"::-webkit-scrollbar-track": {
		background: "#f1f1f1"
	},

	"::-webkit-scrollbar-thumb": {
		background: "#888"
	}
});

export {
	ArrowBackButton,
	Backdrops,
	Genres,
	MovieInfo,
	Overview,
	Page,
	Poster,
	Providers,
	ReleaseDate,
	Runtime,
	Title
};
