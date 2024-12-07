"use client";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import Header from "../components/header";

const FavoritesPage = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div>
      <Header />
      <main>
        <h2>My Favorites</h2>
        <ul>
          {favorites.map((movie) => (
            <li key={movie.id}>
              {movie.title}
              <button>Remove</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default FavoritesPage;
