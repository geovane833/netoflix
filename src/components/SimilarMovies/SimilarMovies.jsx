import { Link } from "react-router-dom";
import "./SimilarMovies.css";

const POSTER_BASE = "https://image.tmdb.org/t/p/w500/";

function SimilarMovies({ similarMovies }) {
  if (!similarMovies.length) return null;

  return (
    <div className="similar-movies">
      <h2>Filmes similares</h2>
      <div className="similar-list">
        {similarMovies.map((simMovie) => (
          <Link
            to={`/details/${simMovie.id}`}
            key={simMovie.id}
            className="similar-movie-card"
          >
            <img
              src={
                simMovie.poster_path
                  ? `${POSTER_BASE}${simMovie.poster_path}`
                  : "/fallback.jpg"
              }
              alt={simMovie.title}
            />
            <p>{simMovie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SimilarMovies;
