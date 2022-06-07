import fabien from "../images/portifolio.png"
import resume from "../files/FabienCV.pdf"
export default function About() {

    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center lg:gap-20">
            <div className="lg:max-w-lg lg:w-1/3 md:w-1/2 w-5/6 sm:text-center">
                <img
                  className="object-cover object-center rounded-full w-[100%] sm:mb-10 mb-10"
                  alt="hero"
                  src={fabien}
                />
              </div>
            <div className="lg:flex-grow md:w-1/2 lg:w-2/3 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#cdcdff]">
                Hi, I'm Fabien.
                <br className="hidden lg:inline-block" /> A full-Stack Software Engineer
              </h1>
              <p className="mb-8 leading-relaxed">
                I love building digital solutions using cutting edge technologies to address real life problems. Team collaboration, professional communication, considering good practices while building projects, eager to learn new skills, among others are my areas of strength. Timely delivery of products exceeding clients' expectations is my priority. <br/> <br/>

                Looking forward to work with you!
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex font-bold text-white bg-[#7c7cdf] border-0 py-2 px-6 focus:outline-none hover:bg-[#cdcdff] hover:text-[#7c7cdf] rounded-full text-lg">
                  Work With Me
                </a>
                <a
                  href={resume}
                  className="ml-4 inline-flex font-bold text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-[#cdcdff] rounded-full text-lg">
                  My Resume
                </a>
              </div>
            </div>
            
          </div>
        </section>
      );
}