"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/themeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="rounded-full p-2 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}