import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Skeleton
} from "@mui/material";
import { tmdbApi } from "../../services";
import {
	IProviders,
	TMDBCredit,
	TMDBImagesResult,
	TMDBMovieResult
} from "../../utils/models";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

import { errorAlert } from "../../utils/toastifyAlerts";
import {
	Description,
	Images,
	MovieGenres,
	MovieTitle,
	Other,
	Overview,
	Providers,
	styles
} from "./styles";

interface MovieModalProps {
	movieId: number;
	onClose: () => void;
}
export default function MovieModal({ movieId, onClose }: MovieModalProps) {
	const [movie, setMovie] = useState<TMDBMovieResult | null>(null);
	const [providers, setProviders] = useState<IProviders[]>([]);
	const [credits, setCredits] = useState<TMDBCredit[]>([]);
	const [images, setImages] = useState<TMDBImagesResult | null>(null);

	const backdrops = images?.backdrops;

	useEffect(() => {
		getMovie();
	}, []);

	async function getMovie() {
		try {
			const { data: movieData } = await tmdbApi.getMovie(Number(movieId));
			const { data: movieProviders } = await tmdbApi.getMovieProviders(
				Number(movieId)
			);
			const { data: movieImages } = await tmdbApi.getMovieImages(
				Number(movieId)
			);
			const { data: movieCredits } = await tmdbApi.getMovieCredits(
				Number(movieId)
			);

			setMovie(movieData);
			setProviders(movieProviders.results.BR?.flatrate);
			setImages(movieImages);
			setCredits(movieCredits.cast);
			formatRuntime(movieData.runtime);
		} catch (error) {
			console.log(error);
			errorAlert("External API error. Try again later");
		}
	}

	function formatRuntime(time: number) {
		const duration = dayjs.duration(+time, "minutes");

		return `${duration.hours()}h ${duration.minutes()}min`;
	}

	function renderSkeleton() {
		return (
			<DialogContent sx={styles.dialogContent}>
				<Skeleton variant="rectangular" width={250} height={300} />

				<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
					<Skeleton variant="rectangular" width={250} height={50} />
					<Skeleton variant="rectangular" width={250} height={150} />
					<Skeleton variant="rectangular" width={250} height={50} />
				</div>
				<Skeleton variant="rectangular" width={250} height={300} />
			</DialogContent>
		);
	}

	function renderContent() {
		if (movie)
			return (
				<DialogContent sx={styles.dialogContent}>
					<img
						src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`}
						alt={movie.title}
						width={250}
						style={{ borderRadius: "15px" }}
					/>

					<Overview>
						<MovieGenres>
							{movie.genres.map((genre) => (
								<span>{genre.name}</span>
							))}
						</MovieGenres>

						<MovieTitle>{movie.title}</MovieTitle>

						<Description>{movie.overview}</Description>

						<h3>Elenco</h3>
						<p className="cast">
							{credits
								.slice(0, 10)
								.map((credit) => credit.name)
								.join(", ")}
						</p>

						<Other>
							<div>
								<p>{movie.vote_average.toFixed(1)}</p>
								<h3>Avaliação</h3>
							</div>

							<div>
								<p>{formatRuntime(movie.runtime)}</p>
								<h3>Duração</h3>
							</div>

							<div>
								<p>{dayjs(movie.release_date).format("YYYY")}</p>
								<h3>Lançamento</h3>
							</div>
						</Other>

						<Providers>
							{providers?.map((provider) => (
								<>
									<img
										src={`https://image.tmdb.org/t/p/w400${provider.logo_path}`}
										alt={provider.provider_name}
										width={35}
										title={provider.provider_name}
									/>
								</>
							))}
						</Providers>
					</Overview>

					<Images>
						{backdrops?.slice(0, 7).map((image) => (
							<>
								<img
									src={`https://image.tmdb.org/t/p/w400${image?.file_path}`}
									alt={movie.title}
									width={200}
								/>
							</>
						))}
					</Images>
				</DialogContent>
			);
	}

	return (
		<Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
			{!movie ? renderSkeleton() : renderContent()}

			<DialogActions
				sx={{
					backgroundColor: "#EBECF2"
				}}
			>
				<Button onClick={onClose}>Fechar</Button>
			</DialogActions>
		</Dialog>
	);
}
