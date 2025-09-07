import { alpha, Box, styled } from "@mui/material";

export const Page = styled(Box)({
	display: "flex",
	flexDirection: "column",
	paddingBottom: "50px"
});

export const GenresFilter = styled("div")({
	marginTop: "100px",
	display: "flex",
	gap: "10px",
	padding: "0 20px",
	overflow: "auto",
	cursor: "grab",
	userSelect: "none",
	scrollBehavior: "smooth",
	"&::-webkit-scrollbar": {
		display: "none"
	}
});

export const TrendingMovies = styled("div")({
	display: "grid",
	gridTemplateColumns: "repeat(5, auto)",
	rowGap: "20px",
	width: "90%",
	margin: "0 auto",
	paddingTop: "20px"
});

export const Movie = styled("div")({
	width: "200px",
	cursor: "pointer",

	img: {
		borderRadius: "20px"
	}
});

export const MovieInfo = styled("div")({
	color: alpha("#fff", 0.7),

	".title": {
		fontWight: "bold",
		color: "#fff",
		margin: "10px"
	},

	".info": {
		display: "flex",
		alignItems: "center"
	},

	".release": { marginLeft: "15px" },

	svg: {
		color: "#EC8A13"
	}
});
