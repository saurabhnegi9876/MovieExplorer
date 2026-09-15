import { Link } from "react-router-dom";

type MovieProps = {
  id: number;
  title: string;
  poster_path: string;
  original_language: string;
};

type MovieCardProps = {
  movies: MovieProps[];
};

export default function MovieCard({ movies }: MovieCardProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <Link
          key={movie.id}
          to={`/movie/${movie.id}`}
        >
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full aspect-[2/3] object-cover rounded-md"
            />

            <h1 className="text-lg font-bold mt-2">
              {movie.title}
            </h1>

            <h4>Language: {movie.original_language}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}