export interface TMDBMovieResult {
	id: number;
	title: string;
	overview: string | null;
	poster_path: string | undefined;
	backdrop_path: string | undefined;
	runtime: number;
	release_date: string;
	genres: {
		id: number;
		name: string;
	}[];
}

export interface TMDBMoviesResult {
	id: number;
	title: string;
	backdrop_path: string | undefined;
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

export interface TMDBCreditsRescult {
	id: number;
	cast: {
		id: number;
		name: string;
		profile_path: string;
		cast_id: number;
		character: string;
		order: 0;
	}[];
}

export interface IProviders {
	logo_path: string;
	provider_id: string;
	provider_name: string;
}
