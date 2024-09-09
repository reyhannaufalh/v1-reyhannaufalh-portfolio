import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import Services from "./Services";
import AchievementLink from "./components/AchievementLink";
import tech from "./data/tech.json";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function About() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-16 mt-16 scroll-smooth xl:mt-20 xl:flex-row xl:px-44">
        <div className="flex flex-col items-center justify-center w-full gap-8 text-center xl:max-w-4xl">
          <p className="text-4xl font-extrabold leading-tight lg:text-7xl">
            I’m a Fullstack Web Developer🧑‍💻 and UI/UX Designer🎨 living in
            Indonesia.
          </p>

          <p className="max-w-2xl text-neutral-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            architecto natus, vero voluptate unde praesentium similique totam in
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/portofolio"
              className="px-8 py-4 font-semibold rounded-full sm:text-lg bg-violet-600"
            >
              Download My CV
            </Link>
            <a
              href="#contactForm"
              className="px-8 py-4 font-semibold rounded-full sm:text-lg"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      <div className="container my-20 xl:my-32">
        <hr className="w-full border border-neutral-900" />
      </div>

      <Services />

      <div className="container my-20 xl:my-32">
        <hr className="w-full border border-neutral-900" />
      </div>

      {/* Tech */}
      <div className="container flex flex-col items-center gap-16 xl:px-44">
        <h1 className="max-w-2xl text-5xl font-extrabold leading-tight xl:text-6xl">
          Technology I use.
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          {tech.map((item) => (
            <div
              key={item.slug}
              className="flex items-center justify-center p-3 duration-500 bg-white rounded-full hover:-translate-y-2"
              data-tooltip-id={item.slug}
            >
              <img
                src={item.image}
                className="block w-10 h-10"
                alt={item.name}
              />

              <ReactTooltip id={item.slug} place="bottom" content={item.name} />
            </div>
          ))}
        </div>
      </div>
      {/* Tech */}

      <div className="container my-20 xl:my-32">
        <hr className="w-full border border-neutral-900" />
      </div>

      <div className="container flex flex-col gap-16 xl:px-44">
        <h1 className="max-w-2xl text-5xl font-extrabold leading-tight xl:text-6xl">
          My best achievement.
        </h1>

        <div className="flex flex-col w-full gap-8">
          <AchievementLink
            title="1st place in Magic Competition 2023"
            organization="Himpunan Mahasiswa Manajemen Administrasi UNS"
          />
          <AchievementLink
            title="2nd place in Lomba Akademik IT SPECTA XI 2023"
            organization="Universitas Muhammadiyah Yogyakarta"
          />
          <AchievementLink
            title="1st Best Submission Project of Mobile App Design"
            organization="Universitas Indonesia"
          />
          <AchievementLink
            title="3rd place in Lomba Akademik IT SPECTA 2024"
            organization="Universitas Muhammadiyah Yogyakarta"
          />
        </div>
      </div>

      <div className="container my-20 xl:my-32">
        <hr className="w-full border border-neutral-900" />
      </div>

      <ContactForm />

      <div className="mb-32"></div>
    </>
  );
}
