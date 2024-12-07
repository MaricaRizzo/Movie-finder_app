"use client";
import { useState } from "react";
import Header from "./components/header";
import MoviesList from "./components/moviesList";
import SearchBar from "./components/search";

export default function Home() {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <Header />
      <main>
        <SearchBar setMovies={setMovies} />
        <MoviesList movies={movies} />
      </main>
    </div>
  );
}
