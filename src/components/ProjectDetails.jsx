import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ProjectDetails() {
  const { url } = useParams();
  const project = projects.find((project) => project.slug === url);

  if (!project) {
    return <p>Project not found</p>;
  }

  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
  }).format(new Date(project.date));

  return (
    <>
      <img
        src="../images/background-hero.svg"
        alt="bg"
        className="absolute top-0 left-0 right-0 w-full -z-10"
      />

      <div className="container mt-14">
        <Link
          to="/portfolio"
          className="flex items-center gap-3 px-6 py-3 font-semibold rounded-full w-fit bg-neutral-800"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back to my works
        </Link>
      </div>

      <div className="container flex flex-col items-center justify-center gap-12 py-12">
        <div className="text-center">
          <h1 className="font-semibold text-6xl text-center max-w-5xl leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
            {project.name}
          </h1>
          <p className="mt-3 text-xl text-neutral-400">
            {project.details.client} - {formattedDate}
          </p>
        </div>

        <div className="relative flex w-full place-content-center">
          <div className="p-6 border-2 border-neutral-700 rounded-2xl">
            <img
              src={project.image}
              alt={project.name}
              className="h-auto mb-4 max-w-7xl"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
        </div>
      </div>

      <div className="flex-col max-w-5xl gap-6 px-24 mx-auto ">
        <div>
          <h5 className="font-semibold text-3xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
            Overview
          </h5>
          <p className="leading-relaxed text-neutral-300">
            {project.details.overview}
          </p>
        </div>
      </div>

      <div className="mb-96"></div>
    </>
  );
}
