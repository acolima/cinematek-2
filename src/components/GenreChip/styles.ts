import { Chip, styled } from "@mui/material";

interface Props {
	selected: boolean;
}

export const StyledChip = styled(Chip)(({ selected }: Props) => ({
	display: "flex",
	alignItems: "center",
	gap: "5px",
	padding: "5px 10px",
	background: selected
		? "rgba(255, 255, 255, 0.7)"
		: "rgba(255, 255, 255, 0.15)",
	borderRadius: "16px",
	boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
	border: "1px solid rgba(255, 255, 255, 0.2)",
	backdropFilter: "blur(10px)",
	transition: "0.3s",
	cursor: "pointer",
	color: selected ? "#020F1D" : "inherit",
	"&:hover": {
		background: "rgba(255, 255, 255, 0.25)"
	}
}));
