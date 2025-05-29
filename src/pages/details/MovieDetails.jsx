import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieDetails.css";
import MoviePoster from "../../components/MoviePoster/MoviePoster";
import MovieInfo from "../../components/movieInfo/MovieInfo";
import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";


function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([]);

  const IMG_BASE = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchMovie() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
        },
      };

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
          options
        );
        const data = await res.json();
        setMovie(data);

        const trailerRes = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`,
          options
        );
        const trailerData = await trailerRes.json();
        const trailer = trailerData.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        setTrailerKey(trailer ? trailer.key : "");

        const similarRes = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar?language=pt-BR&page=1`,
          options
        );
        const similarData = await similarRes.json();
        setSimilarMovies(similarData.results || []);

        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar filme:", error);
      }
    }

    fetchMovie();
  }, [id]);

  if (loading) return <div className="loading">Carregando...</div>;
  if (!movie) return <div>Filme não encontrado</div>;

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(${IMG_BASE}${movie.backdrop_path})`
          : "none",
      }}
    >
      <div className="overlay">
        <div className="content">
          <MoviePoster poster={movie.poster_path} title={movie.title} />
          <MovieInfo
            movie={movie}
            trailerKey={trailerKey}
            showTrailer={showTrailer}
            setShowTrailer={setShowTrailer}
          />
        </div>

        <SimilarMovies similarMovies={similarMovies} />
      </div>
    </div>
  );
}

export default MovieDetails;
