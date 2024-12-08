import axios from "axios";

const OMDB_API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export const fetchMovieData = async (searchQuery) => {
  const response = await axios.get("https://www.omdbapi.com/?", {
    params: {
      s: searchQuery,
      apikey: OMDB_API_KEY,
    },
  });
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get("https://www.omdbapi.com/?", {
    params: {
      i: id,
      apikey: OMDB_API_KEY,
    },
  });
  return response.data;
};
