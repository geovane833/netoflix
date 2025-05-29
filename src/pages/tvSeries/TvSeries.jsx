import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import MovieContainer from "../../components/movieContainer/MovieContainer";
import "./TvSeries.css";

function TvSeries() {
  const [series, setSeries] = useState([]);

  async function getTvSeries() {
    const url = "https://api.themoviedb.org/3/discover/tv?language=pt-BR";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();
    setSeries(data.results);
  }

  useEffect(() => {
    getTvSeries();
  }, []);

  return (
    <>
      <Header />
      <MovieContainer movies={series} />
    </>
  );
}

export default TvSeries;
