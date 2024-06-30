import { Link, useLocation } from "react-router-dom";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export default function Navbar() {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "px-4 py-2 active-nav-link"
      : "px-4 py-2 text-neutral-400";
  };

  return (
    <>
      <BackgroundBeams></BackgroundBeams>
      <nav className="container flex items-center justify-between mt-10">
        <p className="font-semibold md:text-xl">reyhannaufalh</p>

        <div className="hidden gap-2 p-2 bg-transparent rounded-full lg:flex backdrop-blur-sm">
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
          <a
            href="https://www.linkedin.com/in/reyhan-naufal-hakim-156235223/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="#">Resume</a>
        </div>
      </nav>
    </>
  );
}
