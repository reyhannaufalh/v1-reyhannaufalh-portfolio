import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import ContactForm from "../ContactForm";
import ProjectLink from "./ProjectLink";

export default function ProjectDetails() {
  const { url } = useParams();
  const project = projects.find((project) => project.slug === url);

  if (!project) {
    return <p>Project not found</p>;
  }

  const projectExceptThis = projects.filter((p) => p.slug !== url).slice(0, 2);

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

          <div className="flex flex-col gap-4 mt-12 sm:flex-row">
            {project.details.links.website && (
              <ProjectLink
                url={project.details.links.website}
                text="Live Website"
              />
            )}
            {project.details.links.prototype && (
              <ProjectLink
                url={project.details.links.prototype}
                text="Figma Prototype"
              />
            )}
            {project.details.links.github && (
              <ProjectLink
                url={project.details.links.github}
                text="Github Repository"
              />
            )}
            {project.details.links.documentation && (
              <ProjectLink
                url={project.details.links.documentation}
                text="Documentation"
              />
            )}
            {project.details.links.api_documentation && (
              <ProjectLink
                url={project.details.links.api_documentation}
                text="API Documentation"
              />
            )}
            {project.details.links.certificate && (
              <ProjectLink
                url={project.details.links.certificate}
                text="Certificate"
              />
            )}
          </div>
        </div>

        <div className="flex w-full place-content-center">
          <div className="w-full p-3 border-2 xl:p-6 border-neutral-700 rounded-2xl">
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

        {project.details.job_description && (
          <div>
            <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
              Job Description
            </h5>

            <p className="mb-3 font-semibold">Role: {project.details.role}</p>

            <ol className="pl-5 space-y-2 list-disc">
              {project.details.job_description.map((job, index) => (
                <li key={index} className="text-neutral-300">
                  {job}
                </li>
              ))}
            </ol>
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
