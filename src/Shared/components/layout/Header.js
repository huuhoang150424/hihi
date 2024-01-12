import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <header className="flex item-center justify-center gap-x-5 text-white py-10 mb-5">
            <Link to="/" className={location.pathname === "/" ? "text-primary" : ""}>
                Home
            </Link>
            <Link
                to="/movies"
                className={location.pathname === "/movies" ? "text-primary" : ""}
            >
                Movie
            </Link>
        </header>
    );
};

export default Header;
