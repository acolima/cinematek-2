import axios from "axios";

const TMDB_URL = import.meta.env.VITE_TMDB_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function getTrendingMovies() {
	return axios.get(`${TMDB_URL}/trending/movie/week?api_key=${API_KEY}`);
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

export const tmdbApi = {
	findMoviesByName,
	getMovie,
	getMovieCredits,
	getMovieImages,
	getMovieProviders,
	getTrendingMovies
};
