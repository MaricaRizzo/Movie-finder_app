import { render, screen } from "@testing-library/react";
import SearchBar from "../src/app/components/search";

describe("Search Bar", () => {
  it("renders correctly", () => {
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText(/search movie.../i);
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByRole("button", { name: /search/i });
    expect(searchButton).toBeInTheDocument();
  });
});
