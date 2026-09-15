import { Link } from "react-router-dom";
import ThemeToggle from "./themeToggle";
import FavoriteIcon from "./favorite";
import { useTheme } from "../../context/themeContext";

export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <nav
            className={`
                w-full
                border-b border-border
                bg-navbar
                text-primary-text
                transition-colors duration-200
                ${theme === "dark" ? "dark" : ""}
            `}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
    to="/"
    className={`
        cursor-pointer
        select-none
        text-xl font-bold tracking-tight
        sm:text-2xl
        transition-colors duration-200
        hover:text-accent
        ${theme === "dark" ? "text-white" : "text-black"}
    `}
>
    Movie
    <span className="text-accent">
        Explorer
    </span>
</Link>

                {/* Right Side */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <ThemeToggle />

                    <Link
                        to="/favorites"
                        className="transition-colors duration-200 hover:text-accent"
                    >
                        <FavoriteIcon />
                    </Link>
                </div>

            </div>
        </nav>
    );
};