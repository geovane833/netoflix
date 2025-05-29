import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import Home from './pages/home/Home'
import MovieDetails from './pages/details/MovieDetails'
import Trending from './pages/trending/Trending'
import TvSeries from './pages/tvSeries/TvSeries'
import TvShows from './pages/tvShows/TvShows'
import SearchResults from './components/SearchResults/SearchResults'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
