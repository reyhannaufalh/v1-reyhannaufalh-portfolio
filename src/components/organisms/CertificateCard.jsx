import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function CertificateCard({ certificate }) {
  return (
    <Link
      to={certificate?.url}
      target="_blank"
      className="flex items-center justify-between px-4 py-6 border-b group hover:bg-neutral-800 border-neutral-800"
    >
      <div className="">
        <h5 className="text-lg font-bold">{certificate?.name}</h5>
        <p className="">{certificate?.institution}</p>
      </div>

      <div className="flex items-center justify-center w-12 h-12 duration-500 rounded-full group-hover:-rotate-45 group-hover:bg-neutral-700 bg-neutral-800">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </Link>
  );
}
