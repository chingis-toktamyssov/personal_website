import ProjectCard from "./ProjectCard";
import projectPlaceholder1 from "@/assets/project-placeholder-1.jpg";
import projectPlaceholder2 from "@/assets/project-placeholder-2.jpg";
import projectPlaceholder3 from "@/assets/project-placeholder-3.jpg";
import projectPlaceholder4 from "@/assets/project-placeholder-4.jpg";
import pdfDigitalClock from "@/assets/digital_clock parts, schematics, and pictures.pdf";
import imageDigitalClock from "@/assets/digital_clock.jpg";

// Sample project data - replace with your actual projects
const projects = [
  {
    title: "Digital Clock",
    description: "A gift for a friend. Built with plywood, 3D printed parts, and a custom designed PCB. Runs on an Arduino Nano; the rest of the parts and schematics are included in the document attached. Art is inspired by the show Arcane and is done by a friend.",
    githubUrl: "https://github.com/chingis-toktamyssov/digital_clock",
    demoUrl: pdfDigitalClock,
    videoUrl: "https://drive.google.com/file/d/1_K0WYndRhjotTptOazy-vGoKWBdjlX__/view?usp=sharing",
    imageUrl: imageDigitalClock,
  },  
  {
    title: "Project Title 2",
    description: "This is a placeholder for your second project description. Share the story behind this project, the technical decisions you made, and the results you achieved. Mention any interesting features, performance optimizations, or user experience improvements you implemented.",
    githubUrl: "https://github.com/yourusername/project2",
    demoUrl: "https://your-project2-demo.com",
    imageUrl: projectPlaceholder2,
  },
  {
    title: "Project Title 3",
    description: "This is a placeholder for your third project description. Describe the architecture, key features, and any innovative solutions you developed. Include information about scalability, security considerations, or unique integrations that set this project apart from others.",
    githubUrl: "https://github.com/yourusername/project3",
    videoUrl: "https://youtube.com/watch?v=your-video3",
    imageUrl: projectPlaceholder3,
  },
  {
    title: "Project Title 4",
    description: "This is a placeholder for your fourth project description. Highlight the technical complexity, user feedback, and lessons learned during development. Mention any awards, recognition, or positive impact this project had on users or the development community.",
    githubUrl: "https://github.com/yourusername/project4",
    demoUrl: "https://your-project4-demo.com",
    videoUrl: "https://youtube.com/watch?v=your-video4",
    imageUrl: projectPlaceholder4,
  },
];

const ProjectsGrid = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent" style={{lineHeight: '1.4'}}> 
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              videoUrl={project.videoUrl}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;