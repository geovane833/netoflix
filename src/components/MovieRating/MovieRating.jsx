import "./MovieRating.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function MovieRating({ voteAverage }) {
  const rating = voteAverage / 2;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="rating">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} color="gold" />
      ))}
      {hasHalfStar && <FaStarHalfAlt color="gold" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} color="gray" />
      ))}
      <span>({voteAverage?.toFixed(1) || "0.0"})</span>
    </div>
  );
}

export default MovieRating;
