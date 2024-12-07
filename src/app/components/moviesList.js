import MovieCard from "./movieCard";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function MoviesList(props) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      {props.movies &&
        props.movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.includes(movie)}
          />
        ))}
    </div>
  );
}
