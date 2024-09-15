import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faDownload,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar({ toggleSidebar, setToggleSidebar }) {
  return (
    <aside
      className={`bg-neutral-800 fixed top-0 left-0 h-full z-30 px-6 py-10 transform lg:-translate-x-full ${
        toggleSidebar ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out w-[300px]`}
    >
      <button
        className="w-12 h-12 hover:bg-[rgba(0,0,0,0.1)] rounded-full hover:bg-neutral-700 duration-500"
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className="w-full pt-6">
        <div className="flex flex-col">
          <Link
            to={"#"}
            className="inline-block w-full px-6 py-3 text-white rounded-lg bg-violet-500 hover:bg-violet-600"
          >
            Home
          </Link>

          <Link
            to={"#"}
            className="py-3 px-6 rounded-lg hover:bg-[rgba(0,0,0,0.1)] inline-block w-full"
          >
            Works
          </Link>
          <Link
            to={"#"}
            className="py-3 px-6 rounded-lg hover:bg-[rgba(0,0,0,0.1)] inline-block w-full"
          >
            About
          </Link>
          <Link
            to={"#"}
            className="py-3 px-6 rounded-lg hover:bg-[rgba(0,0,0,0.1)] inline-block w-full"
          >
            Certificates
          </Link>
        </div>

        <div className="mt-8 space-y-2">
          <Link
            to={"https://www.linkedin.com/in/reyhan-naufal-hakim/"}
            className="flex items-center justify-between w-full py-3 pl-4 pr-4 mb-6 border-2 border-dashed border-neutral-600 rounded-2xl"
          >
            <div>
              <FontAwesomeIcon icon={faLinkedin} className="mr-3 text-white" />{" "}
              Linkedin
            </div>

            <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
          </Link>

          <Link
            to={"https://www.linkedin.com/in/reyhan-naufal-hakim/"}
            className="flex items-center justify-between w-full py-3 pl-4 pr-4 mb-6 border-2 border-dashed border-neutral-600 rounded-2xl"
          >
            <div>
              <FontAwesomeIcon icon={faFilePdf} className="mr-3 text-white" />{" "}
              Resume
            </div>

            <FontAwesomeIcon icon={faDownload} />
          </Link>
        </div>
      </div>
    </aside>
  );
}
