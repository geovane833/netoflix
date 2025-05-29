import "./MovieInfo.css";
import MovieRating from "../MovieRating/MovieRating";
import MovieTrailer from "../MovieTrailer/MovieTrailer";

function MovieInfo({ movie, trailerKey, showTrailer, setShowTrailer }) {
  return (
    <div className="details">
      <h1>{movie.title || "Título indisponível"}</h1>

      <MovieRating voteAverage={movie.vote_average} />

      <p className="overview">{movie.overview || "Sem descrição."}</p>

      <p>
        <strong>Gêneros:</strong>{" "}
        {movie.genres?.length > 0
          ? movie.genres.map((genre) => genre.name).join(", ")
          : "Não informado"}
      </p>

      <p>
        <strong>Data de lançamento:</strong>{" "}
        {movie.release_date || "Desconhecida"}
      </p>

      <MovieTrailer
        trailerKey={trailerKey}
        showTrailer={showTrailer}
        setShowTrailer={setShowTrailer}
      />
    </div>
  );
}

export default MovieInfo;
