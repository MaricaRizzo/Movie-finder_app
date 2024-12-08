import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from "../src/app/components/search";
import { fetchMovieData } from "../src/app/utils/omdb";

jest.mock("../src/app/utils/omdb", () => ({
  fetchMovieData: jest.fn(),
}));

describe("SearchBar Component", () => {
  it("displays an error message when the fetch fails", async () => {
    fetchMovieData.mockRejectedValueOnce(new Error("Failed to fetch"));

    const setMoviesMock = jest.fn();

    render(<SearchBar setMovies={setMoviesMock} />);

    const input = screen.getByPlaceholderText("Search movie...");
    fireEvent.change(input, { target: { value: "Inception" } });

    const button = screen.getByText("Search");
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText(/an error occurred while fetching data/i)
      ).toBeInTheDocument();
    });

    expect(setMoviesMock).not.toHaveBeenCalled();
  });
});
