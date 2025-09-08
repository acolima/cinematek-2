export interface TMDBMovieResult {
	id: number;
	title: string;
	overview: string | null;
	poster_path: string | undefined;
	backdrop_path: string | undefined;
	runtime: number;
	release_date: string;
	vote_average: number;
	genres: {
		id: number;
		name: string;
	}[];
}

export interface TMDBMoviesResult {
	id: number;
	title: string;
	backdrop_path: string | undefined;
	poster_path: string | undefined;
}

export interface TMDBSearchResult {
	id: number;
	poster_path: string | undefined;
	title: string;
	release_date: string;
	vote_average: number;
}

export interface TMDBImagesResult {
	id: number;
	backdrops: {
		file_path: string;
	}[];
}

export interface TMDBCreditsResult {
	id: number;
	cast: TMDBCredit[];
}

export interface TMDBCredit {
	id: number;
	name: string;
	profile_path: string;
	cast_id: number;
	character: string;
	order: number;
}

export interface IProviders {
	logo_path: string;
	provider_id: string;
	provider_name: string;
}

export interface TMDBGenres {
	id: number;
	name: string;
}

export interface TMDBGenresResult {
	genres: TMDBGenres[];
}
