import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import MovieContainer from "../../components/movieContainer/MovieContainer";
import "./Trending.css";

function Trending() {
  const [movies, setMovies] = useState([]);

  async function getTrending() {
    const url = "https://api.themoviedb.org/3/trending/movie/day?language=pt-BR";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();
    setMovies(data.results);
  }

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <>
      <Header />
      <MovieContainer movies={movies} />
    </>
  );
}

export default Trending;
