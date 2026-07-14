import FadeIn from "./FadeIn";

import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Diamond Encryption and Decryption OOP CLI App in C++",
        description: "I created an encription and decryption algorithm that",
        image: "public/diamond-traversal.png",
        video: ""
    },

    {
        id: 2,
        title: "Full-stack Surf Session Tracker in React and Node.js",
        description: "TEST",
        image: "public/light-photo.png",
        video: ""
    },

    {
        id: 3,
        title: "DJ Soundpad in Vaninlla JavaScript, CSS and HTML",
        description: "TEST",
        image: "public/dj-box-photo.png",
        video: ""
    },

    {   
        id: 4,
        title: "Procedural CSS Lightbulb (Design Challenge)", 
        description: "TEST",
        image: "public/light-photo.png",
        video: ""

        
    },

    {   
        id: 5,
        title: "OOP CLI Surf Tracker in C++", 
        description: "TEST",
        image: "public/light-photo.png",
        video: ""

        
    },
]

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isClosing, setIsClosing] = useState(false);


    function openModal(project) {
        setSelectedProject(project)
        setIsClosing(false)
    }

    function closeModal() {
        setIsClosing(true);

        setTimeout(() => {
            setSelectedProject(null)
            setIsClosing(false);
        }, 250)
    }

    return (
        <section id="projects">
            <FadeIn>
                <h1 className="sub-header">Some of my projects</h1>
            </FadeIn>
            <div className="projects-grid">
                {projects.map((project) => (
                    <FadeIn key={project.id}>
                        <button className="project-card box-shadow-subtle" onClick={() => openModal(project)}>
                            <h3>{project.title}</h3>
                            <img src={project.image}/>
                        </button>                       
                    </FadeIn>
                ))}
            </div>

            {selectedProject && (
                <div className={`modal-overlay ${isClosing ? "closing" : ""}`} onClick={() => closeModal()}>
                    <div className="modal" onClick={(event) => event.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            x
                        </button>
                        <h2>{selectedProject.title}</h2>
                        
                        <p>{selectedProject.description}</p>
                    </div>
                </div>
            )}
            
        </section>
    );

}

export default Projects;