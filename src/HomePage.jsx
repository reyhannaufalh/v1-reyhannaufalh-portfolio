import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projects from "./data/projects.json";

import {
  faLinkedin,
  faDribbble,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Services from "./Services";

export default function HomePage() {
  const dataProjects = projects.slice(0, 2);
  return (
    <>
      <div className="container flex flex-col items-center justify-between gap-16 mt-16 xl:mt-20 xl:flex-row xl:px-44">
        <div className="flex flex-col w-full gap-8 xl:max-w-3xl">
          <p className="text-5xl font-extrabold leading-tight lg:text-7xl">
            A web developer with a design centric approach.
          </p>

          <p className=" text-neutral-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            architecto natus, vero voluptate unde praesentium similique totam in
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="px-8 py-4 font-semibold rounded-full sm:text-lg bg-violet-600"
            >
              View my works
            </a>
            <a
              href="#"
              className="px-8 py-4 font-semibold rounded-full sm:text-lg"
            >
              Contact me
            </a>
          </div>

          <div className="flex items-center gap-4">
            <p>Find me - </p>

            <Link
              target="_blank"
              to="https://www.linkedin.com/in/reyhan-naufal-hakim-156235223/"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </Link>
            <Link target="_blank" to="https://dribbble.com/reyhannaufal_4">
              <FontAwesomeIcon icon={faDribbble} className="text-2xl" />
            </Link>
            <Link target="_blank" to="https://www.instagram.com/reyhan_nh4/">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </Link>
            <Link target="_blank" to="https://github.com/reyhannaufalh">
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center min-w-[400px] max-w-[600px] h-full overflow-hidden rounded-t-full rounded-b-full bg-neutral-900 max-h-[550px] pt-32 relative">
          <img
            src="../images/reyhan-grayscale.png"
            alt="thumb"
            className="z-10 object-cover scale-125 xl:scale-100"
          />

          <div className="absolute -bottom-10 left-0 right-0 rounded-full w-[400px] h-[400px] bg-violet-600"></div>
          <div className="absolute -bottom-10 left-4 right-0 rounded-full w-[350px] h-[350px] bg-violet-700"></div>
        </div>
      </div>

      <div className="container my-20 xl:my-32">
        <hr className="w-full border border-neutral-900" />
      </div>

      <Services />

      <div className="container my-20 xl:my-32">
        <hr className="w-full border border-neutral-900" />
      </div>

      <div className="container flex flex-col gap-16 xl:px-44">
        <h1 className="max-w-2xl text-5xl font-extrabold leading-tight xl:text-6xl">
          I help move your business forward with design.
        </h1>

        <div className="grid w-full grid-cols-2 gap-8">
          {dataProjects ? (
            dataProjects.map((project) => (
              <ProjectCard key={project.slug} data={project} />
            ))
          ) : (
            <p>No projects found</p>
          )}
        </div>

        <Link
          to="/portfolio"
          className="px-8 py-4 mx-auto font-semibold rounded-full w-fit sm:text-lg bg-violet-600"
        >
          View all works
        </Link>
      </div>

      <div className="container my-20 xl:my-32">
        <hr className="w-full border border-neutral-900" />
      </div>

      <ContactForm />

      <div className="mb-32"></div>
    </Services>
  );
}
