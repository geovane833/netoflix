import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieContainer from "../../components/movieContainer/MovieContainer";
import Header from "../../components/header/Header";

function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchSearch() {
      const url = `https://api.themoviedb.org/3/search/multi?query=${query}&language=pt-BR&page=1&include_adult=false`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
        },
      };

      const res = await fetch(url, options);
      const data = await res.json();
      setResults(data.results);
    }

    fetchSearch();
  }, [query]);

  return (
    <>
      <Header />
      <h2 style={{ color: "white", padding: "20px" }}>
        Resultados para: <span style={{ color: "#e50914" }}>{query}</span>
      </h2>
      <MovieContainer movies={results} />
    </>
  );
}

export default SearchResults;
