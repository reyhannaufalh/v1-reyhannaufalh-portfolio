import { useParams } from "react-router-dom";
// import projects from "../../data/projects.json";
// import ProjectCard from "../organisms/ProjectCard";
import ContactForm from "../organisms/ContactForm";
import { useEffect, useState } from "react";
import ProjectLink from "../atoms/ProjectLink";
import { axiosInstance } from "../../lib/axiosInstance";
import projects_data from "../../data/projects.json";

export default function ProjectDetails() {
  const { url } = useParams();
  let [project, setProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/projects/${url}`);
        setProject(response.data);
        console.log("API SUCCESS");
      } catch (error) {
        console.log("API ERROR");
      }
    };

    fetchData();
  }, []);

  if (!project) {
    let projects_json = projects_data.find((project) => project.slug === url);
    project = { data: projects_json };
  }

  return (
    <>
      <div className="container flex flex-col gap-16 mt-16 xl:mt-20 xl:px-44">
        <div>
          <div className="flex gap-3">
            {project?.data.categories?.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm rounded-full bg-neutral-800 text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
            {project?.data.name}
          </h1>

          <div className="flex flex-col gap-4 mt-12 sm:flex-row">
            {project?.data.links.map((links, index) => (
              <ProjectLink key={index} url={links.url} text={links.name} />
            ))}
          </div>
        </div>

        <div className="flex w-full place-content-center">
          <div className="w-full p-3 border-2 xl:p-6 border-neutral-700 rounded-2xl">
            <img
              src={project?.data.image}
              alt={project?.data.name}
              className="w-full h-auto mb-4"
            />
          </div>
        </div>
      </div>

      <div className="container flex flex-col gap-16 mt-16 xl:mt-20 xl:px-56">
        {project?.data.overview && (
          <div>
            <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
              Overview
            </h5>
            <p className="mb-2 font-semibold text-2">
              Project from: {project?.data.client}
            </p>
            <div className="leading-relaxed custom-editor text-neutral-300">
              <div
                dangerouslySetInnerHTML={{ __html: project?.data.overview }}
              ></div>
            </div>
          </div>
        )}

        {project?.data.result && (
          <div>
            <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
              Result
            </h5>
            <div className="leading-relaxed custom-editor text-neutral-300">
              <div
                dangerouslySetInnerHTML={{ __html: project?.data.result }}
              ></div>
            </div>
          </div>
        )}

        {project?.data.job_description && (
          <div>
            <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
              Job Description
            </h5>
            <div className="leading-relaxed custom-editor text-neutral-300">
              <div
                dangerouslySetInnerHTML={{
                  __html: project?.data.job_description,
                }}
              ></div>
            </div>
          </div>
        )}

        {project?.data.progress && (
          <div>
            <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
              Progress
            </h5>
            <div className="leading-relaxed custom-editor text-neutral-300">
              <div
                dangerouslySetInnerHTML={{ __html: project?.data.progress }}
              ></div>
            </div>
          </div>
        )}

        <div>
          <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
            Tools
          </h5>
          <p></p>
          <div className="flex flex-wrap gap-2">
            {project?.data.tools?.map((tool, index) => (
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

      {/* <div className="container flex flex-col gap-16 xl:px-56">
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
      </div> */}

      <div className="container my-20 xl:my-28">
        <hr className="w-full border border-neutral-900 " />
      </div>

      <ContactForm />

      <div className="mb-32"></div>
    </>
  );
}
