import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import MovieContainer from "../../components/movieContainer/MovieContainer";
import "./TvShows.css";

function TvShows() {
  const [shows, setShows] = useState([]);

  async function getTvShows() {
    const url = "https://api.themoviedb.org/3/tv/popular?language=pt-BR";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();
    setShows(data.results);
  }

  useEffect(() => {
    getTvShows();
  }, []);

  return (
    <>
      <Header />
      <MovieContainer movies={shows} />
    </>
  );
}

export default TvShows;
