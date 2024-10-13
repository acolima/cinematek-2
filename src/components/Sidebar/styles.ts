import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface Props {
	selected?: boolean;
}

const Container = styled(Box)({
	backgroundColor: "#C5CFED",
	height: "100vh",
	width: "4rem",
	position: "absolute",
	left: 0,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	paddingTop: "2rem"
});

const Button = styled(Box)<Props>(({ selected }) => ({
	background: selected ? "#101e4b" : "none",
	color: selected ? "#FFF" : "#101e4b",
	width: "100%",
	height: "5rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer"
}));

export { Button, Container };
