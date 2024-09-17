import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faDownload,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar({ toggleSidebar, setToggleSidebar }) {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "inline-block w-full px-6 py-3 text-white rounded-lg bg-violet-500 hover:bg-violet-600"
      : "inline-block w-full px-6 py-3 rounded-lg hover:bg-[rgba(0,0,0,0.1)]";
  };

  return (
    <>
      <div
        className={`bg-neutral-800 fixed top-0 left-0 h-full z-[1000] px-6 py-9 transform lg:-translate-x-full ${
          toggleSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-[300px]`}
      >
        <aside>
          <button
            className="w-12 h-12 hover:bg-[rgba(0,0,0,0.1)] rounded-full hover:bg-neutral-700 duration-500"
            onClick={() => setToggleSidebar(!toggleSidebar)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="w-full pt-6">
            <div className="flex flex-col">
              <Link
                to={"/"}
                className={getLinkClass("/")}
                onClick={() => setToggleSidebar(!toggleSidebar)}
              >
                Home
              </Link>

              <Link
                to={"/portfolio"}
                className={getLinkClass("/portfolio")}
                onClick={() => setToggleSidebar(!toggleSidebar)}
              >
                Works
              </Link>
              <Link
                to={"/about"}
                className={getLinkClass("/about")}
                onClick={() => setToggleSidebar(!toggleSidebar)}
              >
                About
              </Link>
              <Link
                to={"/certificates"}
                className={getLinkClass("/certificates")}
                onClick={() => setToggleSidebar(!toggleSidebar)}
              >
                Certificates
              </Link>
            </div>

            {/* <div className="mt-8 space-y-2">
              <Link
                to={"https://www.linkedin.com/in/reyhan-naufal-hakim/"}
                className="flex items-center justify-between w-full py-3 pl-4 pr-4 mb-6 border-2 border-dashed border-neutral-600 rounded-2xl"
              >
                <div>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="mr-3 text-white"
                  />{" "}
                  Linkedin
                </div>

                <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
              </Link>

              <a
                href="/CV_Reyhan_Naufal_Hakim.pdf"
                download
                className="flex items-center justify-between w-full py-3 pl-4 pr-4 mb-6 border-2 border-dashed border-neutral-600 rounded-2xl"
              >
                <div>
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="mr-3 text-white"
                  />{" "}
                  Resume
                </div>

                <FontAwesomeIcon icon={faDownload} />
              </a>
            </div> */}
          </div>
        </aside>
      </div>

      <div
        className={`fixed top-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.1)] backdrop-blur-md ${
          toggleSidebar ? "block" : "hidden"
        }`}
        onClick={() => setToggleSidebar(!toggleSidebar)}
      ></div>
    </>
  );
}
