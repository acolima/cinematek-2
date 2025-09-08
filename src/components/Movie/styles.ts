import { styled } from "@mui/material";

export const styles = {
	dialogContent: {
		backgroundColor: "#EBECF2",
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		alignItems: "center"
	}
};

export const Overview = styled("div")({
	fontFamily: "Roboto",
	padding: "15px 0",

	h3: {
		color: "#A09FB4",
		textTransform: "uppercase",
		fontSize: "12px"
	},

	".cast": {
		marginTop: "px",
		fontSize: "14px",
		lineHeight: "16px"
	}
});

export const MovieGenres = styled("h4")({
	display: "flex",
	gap: "10px",
	textTransform: "uppercase",
	color: "#A09FB4",
	fontSize: "12px"
});

export const MovieTitle = styled("h1")({
	color: "#000009",
	fontSize: "30px",
	marginTop: "5px"
});

export const Description = styled("div")({
	marginTop: "20px",
	marginBottom: "30px",
	fontSize: "16px",
	lineHeight: "18px"
});

export const Other = styled("div")({
	marginTop: "20px",
	display: "flex",
	justifyContent: "space-between",

	div: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "5px"
	},

	p: {
		fontSize: "18px"
	}
});

export const Providers = styled("div")({
	marginTop: "10px",
	display: "flex",
	justifyContent: "center",
	gap: "10px",

	img: {
		borderRadius: "50%"
	}
});

export const Images = styled("div")({
	height: "90%",
	display: "flex",
	flexDirection: "column",
	gap: "10px",
	alignItems: "center",
	overflowY: "scroll",
	"&::-webkit-scrollbar": {
		display: "none"
	}
});
