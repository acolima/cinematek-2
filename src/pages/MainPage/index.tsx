import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header, Loader } from "../../components";

import { tmdbApi } from "../../services";
import { TMDBGenres, TMDBMovieResult } from "../../utils/models";
import { GenresFilter, Movie, MovieInfo, Page, TrendingMovies } from "./styles";
import { GenreChip } from "../../components/GenreChip";
import dayjs from "dayjs";
import StarIcon from "@mui/icons-material/Star";

function MainPage() {
	const [movies, setMovies] = useState<TMDBMovieResult[] | []>([]);
	const [genres, setGenres] = useState<TMDBGenres[]>([]);
	const [selectedGenre, setSelectedGenre] = useState("Trending");
	const [loading, setLoading] = useState(false);

	let navigate = useNavigate();

	useEffect(() => {
		getTrendingMovies();
		getGenres();
	}, []);

	async function getTrendingMovies() {
		setLoading(true);

		try {
			const { data } = await tmdbApi.getTrendingMovies();
			setMovies(data.results);
		} catch (error: any) {
			console.log("External API error");
		} finally {
			setLoading(false);
		}
	}

	async function getGenres() {
		setLoading(true);

		try {
			const { data } = await tmdbApi.getMoviesGenres();
			setGenres(data.genres);
		} catch (error: any) {
			console.log("External API error");
		} finally {
			setLoading(false);
		}
	}

	async function getMoviesByGenre(genreId: number) {
		setLoading(true);

		try {
			const { data } = await tmdbApi.getMovieByGenre(genreId);
			setMovies(data.results);
		} catch (error: any) {
			console.log("External API error");
		} finally {
			setLoading(false);
		}
	}

	const carouselRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	function handleMouseLeave() {
		setIsDragging(false);
	}

	function handleMouseUp() {
		setIsDragging(false);
	}

	function handleMouseDown(e: React.MouseEvent) {
		if (!carouselRef.current) return;
		setIsDragging(true);
		setStartX(e.pageX - carouselRef.current.offsetLeft);
		setScrollLeft(carouselRef.current.scrollLeft);
	}

	function handleMouseMove(e: React.MouseEvent) {
		if (!isDragging || !carouselRef.current) return;
		e.preventDefault();
		const x = e.pageX - carouselRef.current.offsetLeft;
		const walk = (x - startX) * 2;
		carouselRef.current.scrollLeft = scrollLeft - walk;
	}

	function handleSearchByGenre(genre: TMDBGenres) {
		setSelectedGenre(genre.name);
		getMoviesByGenre(genre.id);
	}

	return (
		<Page>
			<Header />

			<GenresFilter
				ref={carouselRef}
				onMouseDown={handleMouseDown}
				onMouseLeave={handleMouseLeave}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}
			>
				<GenreChip
					key={1}
					genre={{ id: 1, name: "Trending" }}
					onClick={getTrendingMovies}
					selected={selectedGenre === "Trending"}
				/>
				{genres?.map((genre) => (
					<GenreChip
						key={genre.id}
						genre={genre}
						onClick={() => {
							handleSearchByGenre(genre);
						}}
						selected={selectedGenre === genre.name}
					/>
				))}
			</GenresFilter>

			{loading && <Loader />}

			{movies && (
				<TrendingMovies>
					{movies?.map((movie) => (
						<Movie>
							<img
								src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
								alt={movie.title}
							/>
							<MovieInfo>
								<p className="title">{movie.title}</p>

								<div className="info">
									<span className="info">
										<StarIcon fontSize="small" />
										{movie.vote_average.toFixed(1)}
									</span>
									<span className="release">
										{dayjs(movie.release_date).format("YYYY")}
									</span>
								</div>
							</MovieInfo>
						</Movie>
					))}
				</TrendingMovies>
			)}
		</Page>
	);
}

export default MainPage;
