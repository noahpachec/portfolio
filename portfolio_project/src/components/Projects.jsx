import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Diamond Encryption and Decryption OOP CLI App in C++",
        decription: "TEST",
        video: ""
    },

    {
        id: 2,
        title: "Full-stack Surf Session Tracker in React and Node.js",
        decription: "TEST",
        video: ""
    },

    {
        id: 3,
        title: "DJ Soundpad in Vaninlla JavaScript, CSS and HTML",
        decription: "TEST",
        video: ""
    },

    {   
        id: 4,
        title: "Procedural CSS Lightbulb (Design Challenge)", 
        description: "TEST",
        video: ""
    }
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

            <h1 className="sub-header">My Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <button className="project-card box-shadow-subtle" onClick={() => openModal(project)} key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </button>
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