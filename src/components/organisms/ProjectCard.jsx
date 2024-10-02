import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ProjectCard(data) {
  const { name, slug, categories, image } = data.data;

  return (
    <Link
      to={`/projects/${slug}`}
      className="col-span-2 overflow-hidden duration-500 lg:col-span-1 bg-neutral-900 rounded-2xl group"
      onClick={() => window.scrollTo(0, 0)}
      data-aos="zoom-in-down"
    >
      <div className="overflow-hidden bg-neutral-700 aspect-video">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex gap-3">
          {categories.map((tag, index) => (
            <p
              key={index}
              className="px-4 py-2 text-sm rounded-full bg-neutral-800 text-neutral-400"
            >
              {tag}
            </p>
          ))}
        </div>

        <hr className="w-full my-6 mb-8 border border-neutral-800" />

        <div className="flex flex-col gap-6">
          <h5 className="text-2xl font-bold leading-tight xl:text-3xl">
            {name}
          </h5>
          {/* <p className="truncate text-neutral-300">{details.overview}</p> */}
          <div className="flex items-center justify-center gap-2 w-fit">
            See details <FontAwesomeIcon icon={faCircleRight} />
          </div>
        </div>
      </div>
    </Link>
  );
}
