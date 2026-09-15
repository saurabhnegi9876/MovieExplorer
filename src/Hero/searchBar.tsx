import { Search } from "lucide-react";
import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
  error?: string;
};

function SearchBar({ onSearch, error }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query.trim());
  };

  return (
    <div className="mx-auto mt-3 w-full max-w-md px-4">
      <form
        onSubmit={handleSearch}
        className="relative w-full"
      >
        {/* Search Icon */}
        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-text"
        />

        {/* Input */}
        <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="
          w-full rounded-lg
          border border-zinc-700
          bg-zinc-900
          py-2 pl-10 pr-4
          text-sm text-white
          outline-none
          placeholder:text-zinc-500
          focus:border-violet-500
        "
      />


        {/* Search Button */}
        <button
          type="submit"
          className="
            absolute
            right-1
            top-1/2
            -translate-y-1/2
            rounded-md
            bg-accent
            px-3
            py-1.5
            text-sm
            font-medium
            text-white
            transition-colors
            duration-200
            hover:bg-hover-accent
            active:scale-95
          "
        >
          Search
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default SearchBar;

