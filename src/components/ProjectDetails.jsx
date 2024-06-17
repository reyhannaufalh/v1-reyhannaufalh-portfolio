import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

export default function ProjectDetails() {
  const { url } = useParams();
  const project = projects.find((project) => project.slug === url);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-auto mb-4"
      />
      <p className="text-lg mb-4">Tags: {project.tags.join(", ")}</p>
      <a
        href={project.url}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
}
