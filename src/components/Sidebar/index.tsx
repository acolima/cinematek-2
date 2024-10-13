import { Button, Container } from "./styles";

import MovieIcon from "@mui/icons-material/Movie";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Sidebar() {
	const [buttonSelected, setButtonSelected] = useState("home");

	return (
		<Container>
			<Button
				selected={buttonSelected === "home"}
				onClick={() => setButtonSelected("home")}
			>
				<MovieIcon fontSize={buttonSelected === "home" ? "medium" : "small"} />
			</Button>
			<Button
				selected={buttonSelected === "actors"}
				onClick={() => setButtonSelected("actors")}
			>
				<PersonIcon
					fontSize={buttonSelected === "actors" ? "medium" : "small"}
				/>
			</Button>
			<Button
				selected={buttonSelected === "search"}
				onClick={() => setButtonSelected("search")}
			>
				<SearchIcon
					fontSize={buttonSelected === "search" ? "medium" : "small"}
				/>
			</Button>
		</Container>
	);
}

export default Sidebar;
