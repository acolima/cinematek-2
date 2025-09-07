import { Search } from "@mui/icons-material";
import { Menu, Container, PageTitle } from "./styles";

function Header() {
	return (
		<Container>
			<PageTitle>CINEMATEK</PageTitle>
			<Menu>
				<span>Filmes</span>
				<span>Séries</span>
				<span>
					<Search />
				</span>
			</Menu>
		</Container>
	);
}

export default Header;
