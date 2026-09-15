
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "./movieApi";
import { useFavoriteStore } from "../store/favoriteStore";

type MovieDetailsProps = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

export default function MovieDetials() {
  // URL se movie ID niklegi
const { id } = useParams<{ id: string }>();

  // Movie details store karne ke liye
  const [movie, setMovie] = useState<MovieDetailsProps | null>(null);

  // Zustand store
  const {
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useFavoriteStore();

  // ID milne ke baad movie details fetch karenge
useEffect(() => {
  async function getMovieDetails() {
    if (!id) return;

    const data = await fetchMovieDetails(id);
    setMovie(data);
  }

  getMovieDetails();
}, [id]);

  // Jab tak API se data nahi aata
  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  // Check karo movie already favorite hai ya nahi
  const favorite = isFavorite(movie.id);

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-2xl">

          <div className="flex flex-col gap-8 p-5 sm:p-8 md:flex-row">

            {/* Poster */}
            <div className="mx-auto w-full max-w-sm shrink-0 md:mx-0 md:w-72 lg:w-80">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="h-auto w-full rounded-xl object-cover shadow-xl transition duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* Movie Information */}
            <div className="flex flex-1 flex-col justify-center">

              {/* Title */}
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {movie.title}
              </h1>

              {/* Rating + Release Date */}
              <div className="mt-5 flex flex-wrap items-center gap-3">

                {/* Rating */}
                <div className="flex items-center gap-2 rounded-full bg-yellow-400/10 px-4 py-2 text-yellow-400">
                  <span className="text-lg">★</span>

                  <span className="font-semibold">
                    {movie.vote_average.toFixed(1)}
                  </span>

                  <span className="text-sm text-zinc-400">
                    / 10
                  </span>
                </div>

                {/* Release Date */}
                <div className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                  📅 {movie.release_date}
                </div>

              </div>

              {/* Overview */}
              <div className="mt-8">
                <h2 className="mb-3 text-xl font-semibold">
                  Overview
                </h2>

                <p className="max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg">
                  {movie.overview}
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">

                {/* Favorite Button */}
                <button
                  onClick={() => {
                    if (favorite) {
                      removeFavorite(movie.id);
                    } else {
                      addFavorite(movie);
                    }
                  }}
                  className="rounded-lg bg-violet-600 px-5 py-3 font-medium
                             transition hover:bg-violet-700 active:scale-95"
                >
                  {favorite
                    ? "❤️ Remove from Favorites"
                    : "❤️ Add to Favorites"}
                </button>

                {/* Back Button */}
                <button
                  onClick={() => window.history.back()}
                  className="rounded-lg border border-zinc-700 bg-zinc-800
                             px-5 py-3 font-medium text-zinc-200
                             transition hover:bg-zinc-700 active:scale-95"
                >
                  ← Back
                </button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
