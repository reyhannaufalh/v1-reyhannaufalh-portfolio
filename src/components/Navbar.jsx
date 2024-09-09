import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "text-white" : "text-neutral-400";
  };

  return (
    <>
      <nav className="container flex items-center justify-between mt-10">
        <div className="flex items-center justify-center gap-12">
          <p className="font-semibold md:text-xl">reyhannaufalh</p>

          <p className="text-neutral-700">|</p>

          <div className="hidden gap-6 bg-transparent rounded-full lg:flex backdrop-blur-sm">
            <Link to="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link
              to="/portfolio"
              className={getLinkClass("/portfolio")}
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                });
              }}
            >
              Works
            </Link>
            <Link to="/about" className={getLinkClass("/about")}>
              About
            </Link>
            {/* <Link to="/awards" className={getLinkClass("/awards")}>
              Awards
            </Link> */}
          </div>
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
