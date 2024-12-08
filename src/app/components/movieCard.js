import { useContext, useCallback } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import Link from "next/link";

export default function MovieCard(props) {
  const { setFavorites } = useContext(FavoritesContext);

  const toggleFavorite = useCallback(
    (event) => {
      event.preventDefault();

      setFavorites((prevFavorites) => {
        if (prevFavorites.includes(props.movie)) {
          return prevFavorites.filter((item) => item !== props.movie);
        } else {
          return [...prevFavorites, props.movie];
        }
      });
    },
    [props.recipe, setFavorites]
  );

  return (
    <div className="bg-gray-800 text-white p-4 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <li className="list-none flex flex-col justify-between h-full">
        <img
          src={props.movie.Poster}
          alt={props.movie.Title}
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{props.movie.Title}</h3>
          <p className="text-sm">{props.movie.Year}</p>
          <div className="flex justify-between">
            <span
              onClick={toggleFavorite}
              className="cursor-pointer text-red-500 flex items-center mt-2"
            >
              {props.isFavorite ? (
                <i className="fa-solid fa-heart"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </span>
            <Link
              href={`/movie/${props.movie.imdbID}`}
              className="text-blue-400 hover:text-blue-300 flex items-center mt-2"
            >
              Read more <i className="fa-solid fa-arrow-right ml-1"></i>
            </Link>
          </div>
        </div>
      </li>
    </div>
  );
}
