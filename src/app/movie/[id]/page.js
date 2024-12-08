"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../../utils/omdb";
import Header from "../../components/header";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const getMovieDetails = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchMovieDetails(id);
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6 flex flex-col items-center">
        <div className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden p-6 max-w-3xl w-full">
          <h1 className="text-2xl font-bold mb-4">
            {movie.Title} ({movie.Year})
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full md:w-1/3 rounded-lg"
            />
            <div className="flex flex-col gap-2">
              <p className="">{movie.Plot}</p>
              <p>
                <span className="font-semibold">Director:</span>{" "}
                {movie.Director}
              </p>
              <p>
                <span className="font-semibold">Actors:</span> {movie.Actors}
              </p>
              <p>
                <span className="font-semibold">Genre:</span> {movie.Genre}
              </p>
              <p>
                <span className="font-semibold">Rating:</span>{" "}
                {movie.imdbRating}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
