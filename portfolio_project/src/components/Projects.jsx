import FadeIn from "./FadeIn";

import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Diamond Encryption and Decryption OOP CLI App in C++",
        description: `I developed an object-oriented command-line application in C++ that encrypts and decrypts text using a custom diamond-pattern cipher.

During encryption, the program creates a two-dimensional grid large enough to hold the input text, although the user can also specify a larger grid size manually. The algorithm traverses the grid in a diamond-shaped pattern, placing each character into the array and overlapping toward the centre until the full message has been inserted. Any unused positions are filled with randomly generated uppercase letters. The completed grid is then read column by column to produce the encrypted ciphertext.

Decryption reverses this process. The ciphertext is reconstructed inside the grid, and the program follows the inverse diamond traversal to recover the original message.

The application also supports saving plaintext and ciphertext to files, loading previously stored data, and handling invalid input without terminating unexpectedly. The entire program was designed using object-oriented principles, including separate classes for the cipher logic, grid management, file handling, error handling, and the menu system that directs users through each layer of the application.
`,
        image: "public/diamond-traversal.png",
        video: "",
        code_url: "",
        url_text: "View the code on my GitHub here"
    },

    {
        id: 2,
        title: "Full-stack Surf Session Tracker in React and Node.js",
        description: `I developed a full-stack surf session tracker using React, Node.js, and Express.js. The application allows users to record individual surf sessions, including the board used, location, break type, and wave rating. Session data is stored in a JSON file through the backend, providing a simple form of persistent data storage.

Users can also search and filter sessions across a selection of supported surf locations, making it easier to review previous conditions and compare experiences over time.

The purpose of this project was to strengthen my understanding of backend development, client-server communication, API design, and data management while gaining experience building a more complete and interconnected web application.
`,
        image: "public/light-photo.png",
        video: "",
        code_url: "",
        url_text: "View the code on my GitHub here"
    },

    {
        id: 3,
        title: "DJ Soundpad in Vaninlla JavaScript, CSS and HTML",
        description: `I created a browser-based DJ mixpad to explore how I could combine my programming skills with my interest in techno music.

Built using HTML, CSS, and JavaScript, the application allows users to trigger different audio samples by clicking the on-screen pads or pressing the Q, W, E, A, S, D, Z, X, and C keys. The JavaScript was structured using an object-oriented approach, with DOM event listeners connecting user input to the corresponding sounds.

The project has some limitations when multiple sounds are triggered rapidly due to the way the browser audio system is handled. However, it was one of my first projects to combine interactive JavaScript functionality with my frontend design skills, and it helped me better understand event handling, audio playback, and object-oriented programming in the browser.
`,
        image: "public/dj-box-photo.png",
        video: "",
        code_url: "https://noahpachec.github.io/djbox/",
        url_text: "View the DJ Soundpad here"
    },

    {   
        id: 4,
        title: "Procedural CSS Lightbulb (Design Challenge)", 
        description: `I created a procedural lightbulb entirely with HTML and CSS as a challenge to improve my frontend design skills.

The lightbulb was constructed using layered HTML elements and CSS styling, without relying on images or external graphics. JavaScript is used to switch between CSS classes when the lightbulb is clicked, creating the illusion that it is turning on and illuminating the surrounding area.

This project strengthened my understanding of CSS positioning, shapes, shadows, layering, transitions, and HTML structure while giving me experience creating interactive visual elements from scratch.
`,
        image: "public/light-photo.png",
        video: "public/light-video.webm",
        code_url: "https://noahpachec.github.io/lightbulb/",
        url_text: "View the project Here"
        

        
    },

    // {   
    //     id: 5,
    //     title: "OOP CLI Surf Tracker in C++", 
    //     description: `TEST`,
    //     image: "public/light-photo.png",
    //     video: ""

        
    // },
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
                            
                        <div className="modal-contents">
                            <div className="modal-info">
                                <video src={selectedProject.video} autoPlay muted loop playsInline  />
                        
                                <p>{selectedProject.description}</p>
                            </div>

                            <div className="code-link">
                                <a href={selectedProject.code_url} target="_blank" rel="noopener noreferrer">{selectedProject.url_text}</a>
                            </div>
                        </div>
                        
                        
                        


                    </div>
                </div>
            )}
            
        </section>
    );

}

export default Projects;