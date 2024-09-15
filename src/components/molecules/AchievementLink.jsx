import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function AchievementLink({ title, organization }) {
  return (
    <Link
      to="#"
      className="flex flex-col items-center justify-between w-full col-span-1 gap-5 px-10 py-6 duration-500 border-2 rounded-2xl lg:rounded-full lg:flex-row border-neutral-700 hover:bg-neutral-900 hover:scale-95"
    >
      <div>
        <p className="text-2xl font-bold">{title}</p>
        <p className="mt-2 text-neutral-300">{organization}</p>
      </div>
      <div className="flex items-center justify-center w-full rounded-full lg:w-fit min-w-16 min-h-16 bg-neutral-900">
        <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
      </div>
    </Link>
  );
}
