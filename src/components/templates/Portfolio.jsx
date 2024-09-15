import projects from "../../data/projects.json";
import { useState } from "react";
import ProjectCard from "../organisms/ProjectCard";

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };

  const filteredProjects = projects
    .filter((project) => {
      const matchesTag =
        selectedTag === "All" || project.tags.includes(selectedTag);
      return matchesTag;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <div className="container flex flex-col gap-16 mt-16 xl:mt-20 xl:px-44">
        <div className="flex flex-col gap-8">
          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight xl:text-6xl">
            The work i do.
          </h1>

          <div className="flex flex-wrap gap-4">
            <button
              className={`w-48 rounded-full border shadow-neutral-500 text-sm font-semibold py-3 bg-gradient-to-tr ${
                selectedTag === "All"
                  ? "from-violet-800 to-violet-500 border-0"
                  : "bg-transparent border-neutral-700"
              }`}
              onClick={() => handleTagChange("All")}
            >
              All Projects
            </button>
            <button
              className={`w-48 rounded-full border shadow-neutral-500 text-sm font-semibold py-3 ${
                selectedTag === "Web Development"
                  ? "bg-gradient-to-tr from-violet-800 to-violet-500 border-0"
                  : "bg-transparent border-neutral-700"
              }`}
              onClick={() => handleTagChange("Web Development")}
            >
              Web Development
            </button>
            <button
              className={`w-48 rounded-full border shadow-neutral-500 text-sm font-semibold py-3 ${
                selectedTag === "UI/UX Design"
                  ? "bg-gradient-to-tr from-violet-800 to-violet-500 border-0"
                  : "bg-transparent border-neutral-700"
              }`}
              onClick={() => handleTagChange("UI/UX Design")}
            >
              UI/UX Design
            </button>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.slug} data={project} />
            ))
          ) : (
            <p>No projects found</p>
          )}
        </div>

        <div className="mb-32"></div>
      </div>
    </>
  );
}
