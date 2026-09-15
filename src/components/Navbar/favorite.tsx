import { Heart } from "lucide-react";

function FavoriteIcon() {
  return (
    <button
      type="button"
      aria-label="Favorites"
      className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-red-500"
    >
      <Heart size={22} />
    </button>
  );
}

export default FavoriteIcon;