import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import SearchBar from "./Hero/searchBar";
import { fetchMovies } from "./Hero/movieApi";
import MovieCard from "./Hero/movieCard";
import MovieDetials from "./Hero/movieDetails";
import Favorites from "./Hero/favorite";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  async function searchMovies(query: string) {
    const data = await fetchMovies(query);
    setMovies(data.results);
    if (data.results.length === 0) {
  setError("Movie not found");
  return;
}

setError("");
setMovies(data.results);
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={searchMovies} error={error} />
              <MovieCard movies={movies} />
            </>
          }
        />

        <Route
          path="/movie/:id"
          element={<MovieDetials />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />
      </Routes>
    </>
  );
}