import styled from "@emotion/styled";
import { Box, ImageList, Typography } from "@mui/material";

const Page = styled(Box)({
	display: "flex"
});

const TrendingMovies = styled(ImageList)({
	marginTop: "70px",
	width: "100%",
	padding: "10px"
});

const PageTitle = styled(Typography)({
	fontFamily: "Poppins",
	fontWeight: "500",
	fontSize: "24px",
	width: "80%",
	textAlign: "left",
	marginBottom: "20px",
	"@media (max-width: 600px)": {
		fontSize: "18px"
	}
});

export { Page, PageTitle, TrendingMovies };
