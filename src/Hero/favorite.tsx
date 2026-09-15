import { Link } from "react-router-dom";
import { useFavoriteStore } from "../store/favoriteStore";

export default function Favorites() {
  const { favorites } = useFavoriteStore();

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-3xl font-bold sm:text-4xl">
          ❤️ My Favorites
        </h1>

        {favorites.length === 0 ? (
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="text-center">
              <p className="text-xl text-zinc-400">
                No favorite movies yet.
              </p>

              <Link
                to="/"
                className="mt-4 inline-block rounded-lg bg-violet-600 px-5 py-3 font-medium transition hover:bg-violet-700"
              >
                Browse Movies
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {favorites.map((movie) => (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
              >
                <div className="rounded-lg bg-gray-800 p-4 text-white shadow-md transition hover:scale-105">

                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="aspect-[2/3] w-full rounded-md object-cover"
                  />

                  <h2 className="mt-2 text-lg font-bold">
                    {movie.title}
                  </h2>

                  <p className="text-sm text-zinc-400">
                    ⭐ {movie.vote_average.toFixed(1)}
                  </p>

                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}