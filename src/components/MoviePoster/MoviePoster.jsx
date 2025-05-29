import "./MoviePoster.css";

const POSTER_BASE = "https://image.tmdb.org/t/p/w500/";

function MoviePoster({ poster, title }) {
  return (
    <div className="poster">
      <img
        src={poster ? `${POSTER_BASE}${poster}` : "/fallback.jpg"}
        alt={title || "Poster"}
      />
    </div>
  );
}

export default MoviePoster;
