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
            {project?.data.categories?.map((tag) => (
              <span
                key={tag}
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
            {project?.data.links.map((links) => (
              <ProjectLink key={links.url} url={links.url} text={links.name} />
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
            <div className="leading-relaxed custom-editor text-neutral-300">
              <div
                dangerouslySetInnerHTML={{ __html: project?.data.overview }}
              ></div>
            </div>
          </div>
        )}

        {project?.data.goal && (
          <div>
            <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
              The Goal
            </h5>
            <div className="leading-relaxed custom-editor text-neutral-300">
              <div
                dangerouslySetInnerHTML={{ __html: project?.data.goal }}
              ></div>
            </div>
          </div>
        )}

        {project?.data.client && (
          <div>
            <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
              About the Client
            </h5>
            <div className="leading-relaxed custom-editor text-neutral-300">
              <div
                dangerouslySetInnerHTML={{ __html: project?.data.client }}
              ></div>
            </div>
          </div>
        )}

        {project?.data.job_description && (
          <div>
            <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
              My Role and Responsibilities
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

        <div>
          <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
            Tools
          </h5>
          <p></p>
          <div className="flex flex-wrap gap-2">
            {project?.data.tools?.map((tool) => (
              <span
                className="px-4 py-2 text-sm text-white duration-500 border-2 rounded-full cursor-pointer hover:border-violet-500 border-neutral-700"
                key={tool}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {project?.data.progress && (
          <div>
            <h5 className="font-bold text-4xl mb-3 leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
              Progress
            </h5>
            <div className="leading-relaxed custom-editor custom-editor__progress text-neutral-300">
              <div
                dangerouslySetInnerHTML={{ __html: project?.data.progress }}
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
      </div>

      <div className="container my-20 xl:my-28">
        <hr className="w-full border border-neutral-900 " />
      </div>

      <ContactForm />

      <div className="mb-32"></div>
    </>
  );
}
