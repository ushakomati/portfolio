import React from "react";
import ProjectCard from '../../Components/projectCard/projectCard';
import projectsSection from "../../Components/projectsSection/projectsSection";
import "./Projects.scss";

const Projects = () => {
    return (
        <div id="projects">
            <h2 className="title">{projectsSection.title}{" "}</h2>
            <p className="subtitle">{projectsSection.subtitle}{" "}</p>
            <div className="projectContainer">
                {projectsSection.projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title} 
                        intro={project.intro}
                        image={project.image}
                        url={project.url}
                    />
                ))}
            </div>
        </div>
    )
}
export default Projects