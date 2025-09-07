import axios from "axios";
import { TMDBGenresResult } from "../utils/models";

const TMDB_URL = import.meta.env.VITE_TMDB_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function config() {
	return {
		headers: {
			Authorization: `Bearer ${API_KEY}`
		}
	};
}

function getTrendingMovies() {
	return axios.get(`${TMDB_URL}/trending/movie/week?language=pt-br`, config());
}

function getMovie(movieId: number) {
	return axios.get(`${TMDB_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

function findMoviesByName(name: string, page: number) {
	return axios.get(
		`${TMDB_URL}/search/movie?api_key=${API_KEY}&query=${name}&include_adult=false&page=${page}`
	);
}

function getMovieProviders(movieId: number) {
	return axios.get(
		`${TMDB_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`
	);
}

function getMovieImages(movieId: number) {
	return axios.get(`${TMDB_URL}/movie/${movieId}/images?api_key=${API_KEY}
`);
}

function getMovieCredits(movieId: number) {
	return axios.get(`${TMDB_URL}/movie/${movieId}/credits?api_key=${API_KEY}
`);
}

async function getMoviesGenres() {
	return await axios.get<TMDBGenresResult>(
		`${TMDB_URL}/genre/movie/list?language=pt-br`,
		config()
	);
}

export const tmdbApi = {
	findMoviesByName,
	getMovie,
	getMovieCredits,
	getMovieImages,
	getMoviesGenres,
	getMovieProviders,
	getTrendingMovies
};
