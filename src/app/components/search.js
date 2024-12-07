import { useState } from "react";

export default function SearchBar(props) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const movies = await searchRecipes(query);
      props.setMovies(movies);
    } catch (error) {
      console.log(error);
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
