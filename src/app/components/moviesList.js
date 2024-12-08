import MovieCard from "./movieCard";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function MoviesList(props) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {props.movies &&
        props.movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            isFavorite={favorites.includes(movie)}
          />
        ))}
    </div>
  );
}
