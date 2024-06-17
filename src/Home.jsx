export default function Home() {
  return (
    <>
      <img
        src="../public/images/background-hero.svg"
        alt="bg"
        className="absolute top-0 left-0 right-0 w-full -z-10"
      />

      <section className="container py-12 flex flex-col justify-center items-center gap-8">
        <p className="bg-violet-600 border w-fit border-white px-8 py-2 rounded-full font-bold text-xl">
          Fullstack Web Developer & UI/UX Designer
        </p>
        <h1 className="font-semibold text-[80px] text-center max-w-5xl leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
          Web 🧑‍💻 developer with a design 🎨 centric approach
        </h1>
      </section>

      <section className="container mt-96">
        <a
          href=""
          className="relative flex bg-gradient-to-tr from-neutral-900 to-neutral-800 overflow-hidden border-4 rounded-2xl border-neutral-700 border-b-8 group hover:to-violet-950  transition-all duration-300 hover:border-violet-800"
        >
          <div className="flex flex-col gap-8 w-full z-10 ">
            <div className="flex justify-between items-center px-10 py-8">
              <div>
                <h5 className="text-xl font-semibold">Project name</h5>
                <p>Owner</p>
              </div>

              <div>
                <a href="" className="font-semibold">
                  Project details
                </a>
              </div>
            </div>

            <div className="w-full flex place-content-center">
              <img
                src="../public/images/project-image-1.png"
                alt="thumb"
                className="group-hover:scale-105 transition-transform duration-700 group-hover:shadow-xl group-hover:shadow-violet-800"
              />
            </div>
          </div>
        </a>
      </section>

      <div className="mb-96"></div>
    </>
  );
}
