import { Link } from "react-router-dom";
import "./MovieCard.css";
import MovieRating from "../MovieRating/MovieRating";

function MovieCard({ poster_path, title, vote_average, id }) {
    return (
        <div className="movie-card">
            <img 
            // width="250" 
            src={poster_path} alt={`Poster de ${title}`} />
            <h3 className="movie-title">{title}</h3>

            <MovieRating voteAverage={vote_average} />

            <Link to={`/details/${id}`} className="details-button">
                Ver Mais
            </Link>
        </div>
    );
}

export default MovieCard;
