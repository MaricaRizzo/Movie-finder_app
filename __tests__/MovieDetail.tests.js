import { render, screen, waitFor } from "@testing-library/react";
import MoviePage from "../src/app/movie/[id]/page";
import { fetchMovieDetails } from "../src/app/utils/omdb";
import React from "react";

jest.mock("../src/app/utils/omdb", () => ({
  fetchMovieDetails: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useParams: () => ({ id: "tt1234567" }),
}));

describe("Movie Detail Page", () => {
  it("displays correct movie data after loading", async () => {
    const mockMovieData = {
      Response: "True",
      Title: "Inception",
      Year: "2010",
      Plot: "A thief who steals corporate secrets...",
      Director: "Christopher Nolan",
      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      Genre: "Action, Sci-Fi, Thriller",
      imdbRating: "8.8",
      Poster: "https://via.placeholder.com/150",
    };

    fetchMovieDetails.mockResolvedValueOnce(mockMovieData);

    render(<MoviePage />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/inception/i)).toBeInTheDocument();
    });

    expect(screen.getByText("Inception (2010)")).toBeInTheDocument();
    expect(
      screen.getByText(/a thief who steals corporate secrets/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/christopher nolan/i)).toBeInTheDocument();
    expect(screen.getByText(/action, sci-fi, thriller/i)).toBeInTheDocument();
    expect(screen.getByText(/8.8/i)).toBeInTheDocument();
    expect(screen.getByAltText(/inception/i)).toBeInTheDocument();
  });
});
