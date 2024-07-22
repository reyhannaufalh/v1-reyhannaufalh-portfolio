import { Link } from "react-router-dom";
import projects from "./data/projects.json";
import { useState } from "react";

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTag =
      selectedTag === "All" || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <section className="container relative z-10 flex flex-col items-center justify-center gap-16 py-12">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-5xl text-center max-w-5xl leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500 mb-3">
            The work I have done
          </h1>
          <p className="mb-8 text-neutral-400">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie,
          </p>
          <div>
            <input
              type="text"
              placeholder="Search a project by name"
              className="w-full px-4 py-3 border rounded-md bg-neutral-800 text-neutral-400 border-neutral-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="flex gap-4">
            <button
              className={`w-48 rounded-full border border-white shadow-neutral-500 font-semibold py-3 bg-gradient-to-tr ${
                selectedTag === "All"
                  ? "from-purple-800 to-purple-500 shadow-md"
                  : "bg-neutral-800"
              }`}
              onClick={() => handleTagChange("All")}
            >
              All Projects
            </button>
            <button
              className={`w-48 rounded-full border border-white shadow-neutral-500 font-semibold py-3 ${
                selectedTag === "Web Development"
                  ? "bg-gradient-to-tr from-purple-800 to-purple-500 shadow-md"
                  : "bg-neutral-800"
              }`}
              onClick={() => handleTagChange("Web Development")}
            >
              Web Development
            </button>
            <button
              className={`w-48 rounded-full border border-white shadow-neutral-500 font-semibold py-3 ${
                selectedTag === "UI/UX Design"
                  ? "bg-gradient-to-tr from-purple-800 to-purple-500 shadow-md"
                  : "bg-neutral-800"
              }`}
              onClick={() => handleTagChange("UI/UX Design")}
            >
              UI/UX Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="relative flex overflow-hidden transition-all duration-300 border rounded-2xl border-neutral-800 group hover:to-violet-950 hover:border-violet-800"
            >
              <div className="z-10 flex flex-col w-full gap-4 ">
                <div className="flex w-full place-content-center">
                  <img src={project.image} alt={project.name} />
                </div>

                <div className="px-6 pb-5">
                  <h5 className="font-semibold">{project.name}</h5>
                  <div className="flex gap-2 mt-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-semibold rounded bg-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
