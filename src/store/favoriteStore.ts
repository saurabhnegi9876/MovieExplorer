import { create } from "zustand";
import { persist } from "zustand/middleware";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

type FavoriteStore = {
  favorites: Movie[];

  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      // Add movie to favorites
      addFavorite: (movie) =>
        set((state) => {
          // Already favorite hai toh dobara add nahi karna
          if (state.favorites.some((item) => item.id === movie.id)) {
            return state;
          }

          return {
            favorites: [...state.favorites, movie],
          };
        }),

      // Remove movie from favorites
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (movie) => movie.id !== id
          ),
        })),

      // Check movie is favorite or not
      isFavorite: (id) =>
        get().favorites.some(
          (movie) => movie.id === id
        ),
    }),

    {
      name: "movie-favorites",
    }
  )
);
