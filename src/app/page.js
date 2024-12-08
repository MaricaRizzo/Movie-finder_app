"use client";
import { useState } from "react";
import Header from "./components/header";
import MoviesList from "./components/moviesList";
import SearchBar from "./components/search";
import Footer from "./components/footer";

export default function Home() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-6">
        <SearchBar setMovies={setMovies} />
        <MoviesList movies={movies} />
      </main>
      <Footer />
    </div>
  );
}
