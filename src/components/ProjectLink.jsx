import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ProjectLink({ url, text }) {
  return (
    <Link
      to={url}
      target="_blank"
      className="px-8 py-4 font-semibold duration-500 border-2 rounded-full border-neutral-700 sm:text-lg hover:bg-neutral-800"
    >
      {text}{" "}
      <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2 text-sm" />
    </Link>
  );
}
