import { useEffect, useState } from 'react';
import './Home.css';
import Header from '../../components/header/Header';
import MovieContainer from '../../components/movieContainer/MovieContainer';

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function getRatedMovies(pageNumber) {
    setLoading(true);

    const url = `https://api.themoviedb.org/3/discover/movie?language=pt-BR&include_adult=false&include_video=false&page=${pageNumber}&sort_by=popularity.desc`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRatedMovies(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (bottom && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <>
      <Header />
      <MovieContainer movies={movies} />
      {loading && <p className="loading">Carregando...</p>}
    </>
  );
}

export default Home;
