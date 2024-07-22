import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDribbble,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <>
      <div className="container flex flex-col items-center justify-between gap-16 mt-16 xl:mt-10 xl:flex-row xl:px-44">
        <div className="flex flex-col max-w-md gap-8 xl:max-w-2xl">
          <p className="text-5xl font-extrabold leading-tight xl:text-7xl">
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

            <a href="">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faDribbble} className="text-2xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center max-w-md h-full overflow-hidden rounded-t-full rounded-b-full bg-neutral-900 max-h-[550px] pt-32 relative">
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
        <hr className="w-full border border-neutral-700 " />
      </div>

      <div className="container flex flex-col items-center justify-between gap-16 lg:flex-row xl:px-44">
        <div className="flex flex-col w-full duration-500 cursor-pointer hover:-translate-y-2 ">
          <div className="w-48 h-48 bg-violet-500"></div>
          <div className="flex flex-col gap-3 mt-6 text-neutral-300">
            <p className="text-2xl font-bold text-white">
              Fullstack Web Development
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
              quo.
            </p>

            <div>
              <p className="font-semibold text-white">Tech-stack:</p>
              <p>
                TALL Stack (Tailwind CSS, Alpine JS, Laravel, Livewire), MERN
                Stack (MongoDB, Express JS, React Node), Mysql
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full duration-500 cursor-pointer hover:-translate-y-2">
          <div className="w-48 h-48 bg-violet-500"></div>
          <div className="flex flex-col gap-3 mt-6 text-neutral-300">
            <p className="text-2xl font-bold text-white">
              Fullstack Web Development
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
              quo.
            </p>

            <div>
              <p className="font-semibold text-white">Tech-stack:</p>
              <p>
                TALL Stack (Tailwind CSS, Alpine JS, Laravel, Livewire), MERN
                Stack (MongoDB, Express JS, React Node), Mysql
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-20 xl:my-32">
        <hr className="w-full border border-neutral-700 " />
      </div>

      <div className="container flex flex-col gap-16 xl:px-44">
        <h1 className="max-w-2xl text-5xl font-extrabold leading-tight xl:text-6xl">
          I help move your business forward with design.
        </h1>

        <div className="grid w-full grid-cols-2 gap-8">
          {/* Card */}
          <a
            href="#"
            className="col-span-2 overflow-hidden duration-500 lg:col-span-1 bg-neutral-900 rounded-2xl"
          >
            <div>
              <img
                src="../images/project-image-1.png"
                alt="thumb"
                className=""
              />
            </div>

            <div className="p-6">
              <div className="flex gap-3">
                <p className="px-4 py-2 text-sm rounded-full bg-neutral-800 text-neutral-400">
                  Web Development
                </p>
                <p className="px-4 py-2 text-sm rounded-full bg-neutral-800 text-neutral-400">
                  UI/UX Design
                </p>
              </div>

              <hr className="w-full my-6 mb-8 border border-neutral-700" />

              <div className="flex flex-col gap-6">
                <h5 className="text-2xl font-bold leading-tight xl:text-3xl">
                  Saas page Design - Webflow Developmet
                </h5>
                <p className="text-neutral-300">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati, tenetur.
                </p>
                <div className="flex items-center justify-center gap-2 w-fit">
                  See details <FontAwesomeIcon icon={faCircleRight} />
                </div>
              </div>
            </div>
          </a>
          {/* Card */}
          {/* Card */}
          <a
            href="#"
            className="col-span-2 overflow-hidden duration-500 lg:col-span-1 bg-neutral-900 rounded-2xl"
          >
            <div>
              <img
                src="../images/project-image-1.png"
                alt="thumb"
                className=""
              />
            </div>

            <div className="p-6">
              <div className="flex gap-3">
                <p className="px-4 py-2 text-sm rounded-full bg-neutral-800 text-neutral-400">
                  Web Development
                </p>
                <p className="px-4 py-2 text-sm rounded-full bg-neutral-800 text-neutral-400">
                  UI/UX Design
                </p>
              </div>

              <hr className="w-full my-6 mb-8 border border-neutral-700" />

              <div className="flex flex-col gap-6">
                <h5 className="text-2xl font-bold leading-tight xl:text-3xl">
                  Saas page Design - Webflow Developmet
                </h5>
                <p className="text-neutral-300">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati, tenetur.
                </p>
                <div className="flex items-center justify-center gap-2 w-fit">
                  See details <FontAwesomeIcon icon={faCircleRight} />
                </div>
              </div>
            </div>
          </a>
          {/* Card */}
        </div>

        <a
          href="#"
          className="px-8 py-4 mx-auto font-semibold rounded-full w-fit sm:text-lg bg-violet-600"
        >
          View all works
        </a>
      </div>

      <div className="container my-20 xl:my-32">
        <hr className="w-full border border-neutral-700 " />
      </div>

      <div className="container flex flex-col items-start justify-between gap-16 lg:flex-row xl:px-44">
        <div className="flex flex-col w-full gap-6">
          <p className="text-3xl font-extrabold leading-tight xl:text-4xl">
            Let&apos;s work together
          </p>
          <p className="text-neutral-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            magni quae quod mollitia obcaecati dolor voluptatem nam
            reprehenderit non earum?
          </p>
          <div className="flex items-center gap-4">
            <p>Find me - </p>

            <a href="">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faDribbble} className="text-2xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
          </div>
        </div>

        <form action="" className="flex flex-col w-full gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-6 py-5 bg-neutral-900 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-6 py-5 bg-neutral-900 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
          />

          <textarea
            name="message"
            id=""
            className="w-full px-6 py-5 bg-neutral-900 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            placeholder="Your message..."
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="px-8 py-4 font-semibold w-fit sm:text-lg bg-violet-600"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="mb-32"></div>
    </>
  );
}
