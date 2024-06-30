import { ContainerScroll } from "./components/ui/ContainerScroll";

export default function Home() {
  return (
    <>
      <ContainerScroll
        titleComponent={
          <section className="container flex flex-col justify-center gap-8 py-20 text-white md:items-center">
            <p className="px-6 py-2 font-semibold duration-1000 border rounded-full cursor-pointer border-neutral-600 hover:border-violet-700 backdrop-blur-md bg-neutral-800">
              Fullstack Web Developer & UI Designer
            </p>
            <h1 className="font-semibold text-[56px] text-left md:text-8xl md:text-center max-w-5xl leading-tight [text-shadow:0px_2px_12px_var(--tw-shadow-color)] shadow-neutral-500">
              {" "}
              Web developer with a design centric approach
            </h1>
          </section>
        }
      >
        <section className="container mt-48">
          <a
            href=""
            className="relative flex overflow-hidden text-white transition-all duration-300 border-4 border-b-8 bg-gradient-to-tr from-neutral-900 to-neutral-800 rounded-2xl border-neutral-700 group hover:to-violet-950 hover:border-violet-800"
          >
            <div className="z-10 flex flex-col w-full gap-8 ">
              <div className="flex items-center justify-between px-10 py-8">
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

              <div className="flex w-full place-content-center">
                <img
                  src="../images/project-image-1.png"
                  alt="thumb"
                  className="transition-transform duration-700 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-violet-800"
                />
              </div>
            </div>
          </a>
        </section>
      </ContainerScroll>

      <div className="mb-96"></div>
    </>
  );
}
