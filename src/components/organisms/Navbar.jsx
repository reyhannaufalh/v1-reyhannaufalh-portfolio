import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar({ toggleSidebar, setToggleSidebar }) {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "text-white" : "text-neutral-400";
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`container flex items-center bg-[rgba(0,0,0,0.3)] backdrop-blur-xl justify-between py-8 ${
          isSticky
            ? "z-[999] fixed top-0 container left-0 right-0"
            : "bg-transparent w-full"
        }`}
      >
        <div className="flex items-center justify-center gap-12">
          <div className="flex items-center justify-center gap-4">
            <button
              className={`w-12 h-12 duration-500 rounded-full hover:scale-105 lg:hidden bg-neutral-800 ${
                toggleSidebar ? "md:hidden" : "block"
              }`}
              onClick={() => setToggleSidebar(!toggleSidebar)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <p className="hidden font-semibold md:text-xl md:block">
              reyhannaufalh
            </p>
          </div>

          <p className="hidden text-neutral-700 lg:block">|</p>

          <div className="hidden gap-6 bg-transparent rounded-full lg:flex backdrop-blur-sm">
            <Link to="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link
              to="/projects"
              className={getLinkClass("/projects")}
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                });
              }}
            >
              Projects
            </Link>
            <Link to="/about" className={getLinkClass("/about")}>
              About
            </Link>
            <Link to="/certificates" className={getLinkClass("/certificates")}>
              Certificates
            </Link>
          </div>
        </div>

        <div className="flex gap-8 font-semibold">
          <Link
            to="https://www.linkedin.com/in/reyhan-naufal-hakim-156235223/"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </Link>
          <a
            href="/CV_Reyhan_Naufal_Hakim.pdf"
            className="flex items-center gap-2"
            download
          >
            <FontAwesomeIcon icon={faDownload} />
            Resume
          </a>
        </div>
      </nav>

      <section></section>
    </>
  );
}
