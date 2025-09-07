import {
	SportsKabaddi,
	Explore,
	Animation,
	SentimentSatisfiedAlt,
	LocalPolice,
	MenuBook,
	TheaterComedy,
	FamilyRestroom,
	AutoAwesome,
	HistoryEdu,
	Nightlight,
	MusicNote,
	Search,
	Favorite,
	Science,
	LiveTv,
	Visibility,
	MilitaryTech,
	Whatshot
} from "@mui/icons-material";
import { StyledChip as Chip } from "./styles";
import { TMDBGenres } from "../../utils/models";

const genreIcons: Record<string, JSX.Element> = {
	Ação: <SportsKabaddi fontSize="small" />,
	Aventura: <Explore fontSize="small" />,
	Animação: <Animation fontSize="small" />,
	Comédia: <SentimentSatisfiedAlt fontSize="small" />,
	Crime: <LocalPolice fontSize="small" />,
	Documentário: <MenuBook fontSize="small" />,
	Drama: <TheaterComedy fontSize="small" />,
	Família: <FamilyRestroom fontSize="small" />,
	Fantasia: <AutoAwesome fontSize="small" />,
	História: <HistoryEdu fontSize="small" />,
	Terror: <Nightlight fontSize="small" />,
	Música: <MusicNote fontSize="small" />,
	Mistério: <Search fontSize="small" />,
	Romance: <Favorite fontSize="small" />,
	"Ficção científica": <Science fontSize="small" />,
	"Cinema TV": <LiveTv fontSize="small" />,
	Thriller: <Visibility fontSize="small" />,
	Guerra: <MilitaryTech fontSize="small" />,
	Faroeste: <Whatshot fontSize="small" />,
	Trending: <Whatshot fontSize="small" />
};

interface GenreChipProps {
	genre: TMDBGenres;
	onClick: () => void;
	selected: boolean;
}

export function GenreChip({ genre, onClick, selected }: GenreChipProps) {
	return (
		<Chip
			icon={genreIcons[genre.name] || undefined}
			label={genre.name}
			color="error"
			onClick={onClick}
			selected={selected}
		/>
	);
}
