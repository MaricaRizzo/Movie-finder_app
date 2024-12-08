import { useState } from "react";
import { fetchMovieData } from "../utils/omdb";

export default function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const data = await fetchMovieData(query);
      if (data.Response === "True") {
        props.setMovies(data.Search);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
