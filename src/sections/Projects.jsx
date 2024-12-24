import { ArrowRightCircle, Code2, Github } from "lucide-react";
import { data } from "../constants/projectsData";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-10 h-full py-16 bg-white"
    >
      <div className="flex gap-3 items-center">
        <Code2 size={52} className="text-primary" />
        <h1 className="text-3xl lg:text-5xl font-bold text-secondary">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-12 my-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white/90 rounded-2xl overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-primary/40 hover:shadow-primary/80"
          >
            <div className="aspect-video overflow-hidden border-b border-b-black/40">
              <img
                src={item.imgSrc}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex lg:items-center lg:justify-between mb-5 flex-col lg:flex-row gap-2 lg:gap-0">
                <h3 className="lg:text-xl font-bold text-black">{item.label}</h3>
                <div className="flex gap-2">
                  <Link
                    to={item.code}
                    target="_blank"
                    className="text-secondary bg-primary p-1.5 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]
                    transition-transform duration-500 hover:scale-110"
                  >
                    <Github size={20} />
                  </Link>
                  <Link
                    to={item.view}
                    target="_blank"
                    className="text-secondary bg-primary p-1.5 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-transform duration-500 hover:scale-110"
                  >
                    <Code2 size={20} />
                  </Link>
                </div>
              </div>
              <p className="text-black/90 mb-5 text-xs lg:text-sm">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs lg:text-sm bg-primary text-secondary font-semibold rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link
          to="https://github.com/nitishsadhu03?tab=repositories"
          target="_blank"
        >
          <button className="bg-primary text-secondary px-4 py-2.5 rounded-full font-semibold flex gap-2 items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-transform duration-500 hover:scale-110">
            <span>View More Projects</span>
            <ArrowRightCircle />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
