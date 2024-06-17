import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "px-4 py-2 active-nav-link"
      : "px-4 py-2 text-neutral-500";
  };

  return (
    <nav className="container flex justify-between mt-10">
      <p className="font-semibold text-xl">reyhannaufalh</p>

      <div className="flex p-2 bg-neutral-800 rounded-full gap-2">
        <Link to="/" className={getLinkClass("/")}>
          Home
        </Link>
        <Link to="/portfolio" className={getLinkClass("/portfolio")}>
          Works
        </Link>
        <Link to="/about" className={getLinkClass("/about")}>
          About
        </Link>
        <Link to="/awards" className={getLinkClass("/awards")}>
          Awards
        </Link>
      </div>

      <div className="flex gap-6 font-semibold">
        <a href="#">LinkedIn</a>
        <a href="#">Resume</a>
      </div>
    </nav>
  );
}
