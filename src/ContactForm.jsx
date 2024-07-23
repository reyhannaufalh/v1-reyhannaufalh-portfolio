import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDribbble,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function ContactForm() {
  return (
    <div
      id="contactForm"
      className="container flex flex-col items-start justify-between gap-16 lg:flex-row xl:px-44"
    >
      <div className="flex flex-col w-full gap-6">
        <p className="text-3xl font-extrabold leading-tight xl:text-4xl">
          Let&apos;s work together
        </p>
        <p className="text-neutral-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil magni
          quae quod mollitia obcaecati dolor voluptatem nam reprehenderit non
          earum?
        </p>
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

      <form
        action="mailto:reyhannaufal.h@gmail.com"
        method="post"
        className="flex flex-col w-full gap-6"
      >
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
  );
}
