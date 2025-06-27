import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";


const projects = [
  {
    id: 1,
    title: "Anime Dataset Analysis",
    description: "Analysis of the Factors Influencing the Rating and Sales of an Anime to Identify the Underlying Patterns of Anime Success Based on Data.",
    image: "/projects/project1.png",
    tags: ["Machine Learning", "Data Science"],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "SiTrack",
    description:
      "Trucking Information System for PT.Glorious Interbuana to support their trucking operations",
    image: "/projects/project2.png",
    tags: ["Web Dev", "PM", "System Analysis"],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Knowledge Management System Proposal",
    description:
      "Designed a Knowledge Management System for TSA UI to enhance information sharing and collaboration.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  const [activeModal, setActiveModal] = useState(null);
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Some projects I've worked on (Click on the project to see more details).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              onClick={() => {
                if (project.id === 1) setActiveModal(project.id);
                if (project.id === 2) setActiveModal(project.id);
                if (project.id === 3) setActiveModal(project.id);
              }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

          {activeModal === 1 && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-opacity">

            <div className="bg-[#131323] w-full max-w-4xl rounded-lg shadow-lg p-6 relative">

              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-2 right-2 text-muted-foreground hover:text-primary"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold mb-4">Anime Dataset Classification – Details</h3>

              <iframe
                src="/projects/silicon balpen.pdf" 
                className="w-full h-[70vh]"
                frameBorder="0"
              ></iframe>

              <p className="mt-4 text-sm text-muted-foreground">
                This is a detailed project presentation. You can scroll to read more about this project.
              </p>
            </div>
          </div>
        )}

        {activeModal === 2 && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-opacity">

            <div className="bg-[#131323] w-full max-w-4xl rounded-lg shadow-lg p-6 relative">

              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-2 right-2 text-muted-foreground hover:text-primary"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold mb-4">SiTrack – Details</h3>

              <iframe
                src="/projects/silicon balpen.pdf" 
                className="w-full h-[70vh]"
                frameBorder="0"
              ></iframe>

              <p className="mt-4 text-sm text-muted-foreground">
                This is a detailed project presentation. You can scroll to read more about this project.
              </p>
            </div>
          </div>
        )}


        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
