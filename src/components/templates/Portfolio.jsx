// import projects from "../../data/projects.json";
import { useEffect, useState } from "react";
import ProjectCard from "../organisms/ProjectCard";
import { axiosInstance } from "../../lib/axiosInstance";
import projects_data from "../../data/projects.json";

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState("All");

  let [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/projects");
        setProjects(response.data);
      } catch (error) {
        console.log("API ERROR");
      }
    };

    fetchData();
  }, []);

  if (!projects) projects = { data: projects_data };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };

  const filteredProjects = projects?.data
    .filter((project) => {
      const matchesTag =
        selectedTag === "All" || project.categories.includes(selectedTag);
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
              className={`w-56 rounded-full border shadow-neutral-500 text-sm font-semibold py-3 bg-gradient-to-tr ${
                selectedTag === "All"
                  ? "from-violet-800 to-violet-500 border-0"
                  : "bg-transparent border-neutral-700"
              }`}
              onClick={() => handleTagChange("All")}
            >
              All Projects
            </button>
            <button
              className={`w-56 rounded-full border shadow-neutral-500 text-sm font-semibold py-3 ${
                selectedTag === "Software Development"
                  ? "bg-gradient-to-tr from-violet-800 to-violet-500 border-0"
                  : "bg-transparent border-neutral-700"
              }`}
              onClick={() => handleTagChange("Software Development")}
            >
              Software Development
            </button>
            <button
              className={`w-56 rounded-full border shadow-neutral-500 text-sm font-semibold py-3 ${
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
