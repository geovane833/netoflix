import "./MovieTrailer.css";

function MovieTrailer({ trailerKey, showTrailer, setShowTrailer }) {
  if (!trailerKey) return null;

  return (
    <>
      <div className="trailer-embedded">
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Trailer do filme"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <button className="trailer-button" onClick={() => setShowTrailer(true)}>
        ▶️ Assistir em tela cheia
      </button>

      {showTrailer && (
        <div className="trailer-modal">
          <div className="trailer-content">
            <button className="close-button" onClick={() => setShowTrailer(false)}>
              ❌
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieTrailer;
