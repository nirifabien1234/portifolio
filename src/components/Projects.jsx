import { projects } from "../data/data";
import { CodeIcon } from "@heroicons/react/solid";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-[#cdcdff]">
            My Projects  <CodeIcon className="mx-auto inline-block w-10 text-indigo-600" />
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              The following are some of the projects that I worked on recently, using latest technologies like Javascript ES6, React Js, Node Js, Express Js, and more.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-[#cdcdff] mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed mb-4">{project.description}</p>
                    <h2 className="tracking-widest text-sm title-font font-medium text-[#7c7cdf] mb-1">
                      {project.subtitle}
                    </h2>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
     
}