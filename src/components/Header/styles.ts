import { Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)({
	boxSizing: "border-box",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	position: "fixed",
	zIndex: 1,
	padding: 0,
	background: "#839AA7",
	width: "100%",
	height: "70px"
});

export const Menu = styled("div")({
	backgroundColor: "#020F1D",
	padding: "10px 20px",
	borderRadius: "50px",
	display: "flex",
	alignItems: "center",
	gap: "50px",
	fontSize: ".875rem",

	span: {
		cursor: "pointer"
	}
});

export const PageTitle = styled(Typography)({
	fontFamily: "Koulen",
	fontWeight: "700",
	fontSize: "30px",
	color: "#020F1D",
	textAlign: "center",
	position: "absolute",
	left: 20
});
