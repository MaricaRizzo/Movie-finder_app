"use client";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import Header from "../components/header";
import MoviesList from "../components/moviesList";
import Footer from "../components/footer";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          My Favorites
        </h2>
        {favorites.length ? (
          <MoviesList movies={favorites} />
        ) : (
          <h3 className="text-lg text-gray-600">
            You haven't saved any movies yet!
          </h3>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
