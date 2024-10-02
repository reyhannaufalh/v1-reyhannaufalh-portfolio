import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
  return (
    <div className="container grid grid-cols-2 gap-12 lg:flex-row xl:px-44">
      <div
        className="flex flex-col w-full col-span-2 p-8 duration-500 border cursor-pointer lg:col-span-1 border-neutral-700 hover:-translate-y-2 rounded-2xl"
        data-aos="zoom-in-down"
      >
        <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-neutral-900">
          <FontAwesomeIcon icon={faLaptopCode} className="text-4xl" />
        </div>
        <div className="flex flex-col gap-6 mt-6 text-neutral-300">
          <p className="text-2xl font-bold text-white">
            Fullstack Web Development
          </p>
          <p>
            From intuitive interfaces to optimal performance, I make sure every
            project is realized flawlessly.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col w-full col-span-2 p-8 duration-500 border cursor-pointer lg:col-span-1 border-neutral-700 hover:-translate-y-2 rounded-2xl"
        data-aos="zoom-in-down"
      >
        <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-neutral-900">
          <FontAwesomeIcon icon={faLaptopCode} className="text-4xl" />
        </div>
        <div className="flex flex-col gap-6 mt-6 text-neutral-300">
          <p className="text-2xl font-bold text-white">UI/UX Design</p>
          <p>
            I build digital products that are not only beautiful to look at, but
            also easy to use and provide added value to users.
          </p>
        </div>
      </div>
    </div>
  );
}
