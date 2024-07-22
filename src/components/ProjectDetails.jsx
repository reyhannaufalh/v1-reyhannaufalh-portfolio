import { Link, useParams } from "react-router-dom";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import ContactForm from "../ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

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

  const projectExceptThis = projects.filter((p) => p.slug !== url);

  return (
    <>
      <div className="container flex flex-col gap-16 mt-16 xl:mt-20 xl:px-44">
        <div>
          <div className="flex gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm rounded-full bg-neutral-800 text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
            {project.name}
          </h1>

          <div className="flex gap-4 mt-12">
            <Link
              to={project.details.link}
              target="_blank"
              className="px-8 py-4 font-semibold rounded-full sm:text-lg bg-violet-600"
            >
              Live Website{" "}
              <FontAwesomeIcon icon={faCircleRight} className="ml-2" />
            </Link>
            <Link
              to={project.details.link}
              target="_blank"
              className="px-8 py-4 font-semibold rounded-full sm:text-lg"
            >
              Contact me
            </Link>
          </div>
        </div>

        <div className="flex w-full place-content-center">
          <div className="w-full p-6 border-2 border-neutral-700 rounded-2xl">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto mb-4"
            />
          </div>
        </div>
      </div>

      <div className="container flex flex-col gap-16 mt-16 xl:mt-20 xl:px-56">
        <div>
          <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
            Overview
          </h5>
          <p className="mb-2 font-semibold">
            Project from: {project.details.client}
          </p>
          <p className="leading-relaxed text-neutral-300">
            {project.details.overview}
          </p>
        </div>

        {project.details.problem && (
          <div>
            <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
              Problem Statement
            </h5>
            <p className="leading-relaxed text-neutral-300">
              {project.details.problem}
            </p>
          </div>
        )}

        {project.details.solution && (
          <div>
            <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
              Solutions
            </h5>
            <p className="leading-relaxed text-neutral-300">
              {project.details.solution}
            </p>
          </div>
        )}

        <div>
          <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
            Tools
          </h5>
          <p></p>
          <div className="flex flex-wrap gap-2">
            {project.details.tools.map((tool, index) => (
              <span
                className="px-4 py-2 text-sm text-white duration-500 border-2 rounded-full cursor-pointer hover:border-violet-500 border-neutral-700"
                key={index}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container my-20 xl:my-28">
        <hr className="w-full border border-neutral-900 " />
      </div>

      <div className="container flex flex-col gap-16 xl:px-56">
        <h5 className="font-bold text-5xl xl:text-6xl mb-2 text-center leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
          More related projects.
        </h5>
        <div className="grid w-full grid-cols-2 gap-8">
          {projectExceptThis ? (
            projectExceptThis.map((project, index) => (
              <ProjectCard key={index} data={project} />
            ))
          ) : (
            <p>No projects found</p>
          )}
        </div>
      </div>

      <div className="container my-20 xl:my-28">
        <hr className="w-full border border-neutral-900 " />
      </div>

      <ContactForm />

      <div className="mb-32"></div>
    </>
  );
}
