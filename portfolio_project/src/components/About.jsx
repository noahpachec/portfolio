
import surfingImg from "../assets/surfing-img.jpg"
import japanImg from "../assets/japan-img.jpg"
import hackathonImg from "../assets/hackathon-img.jpg"

import FadeIn from "./FadeIn";


function About() {
    return (
        <section id="about">
            <FadeIn>
                <h1 className="sub-header">A little more about me</h1>
            </FadeIn>
            
            <div className="about-container">
                <div className="about-paragraphs">
                    <FadeIn>
                        <p>I am a second-year Computer Science student with a long-standing interest in technology, creativity, and building things.</p>

                    </FadeIn>

                    <FadeIn>
                        <p>Since I was young, I have been curious about how things work. I was always pulling things apart, putting them back together, and asking my engineer father too many questions. This curiosity led me to experiment with both hardware and software from an early age. When I was 15, I built my first computer, which gave me more freedom to explore creative and technical software.</p>

                    </FadeIn>
                    
                    <FadeIn>
                        <p>Before studying Computer Science, I taught myself tools such as Blender, After Effects, Premiere Pro, Photoshop, and Adobe Illustrator. Through learning these programs, I became more interested in the theory behind computers and how software works beneath the surface. I then taught myself web design, and within a few months I was building websites for fun. Although they were simple, they gave me the confidence to turn my ideas into real projects.</p>

                    </FadeIn>
    
                    <FadeIn>
                        <p>I decided to study Computer Science because I wanted a deeper understanding of computing, programming, and lower-level software concepts. Throughout my degree, I have continued building a range of projects, from creative and design-focused websites to more technical command-line programs.</p>

                    </FadeIn>
                    
                    <FadeIn>
                        <p>When I'm not building something on my computer, you'll usually find me in the ocean surfing. I grew up by the ocean, and surfing has always been my way of staying balanced. It challenges me, keeps me curious, and gives me the same sense of progression and problem-solving that I enjoy in technology. Whether I'm writing code or catching waves, I enjoy learning, improving, and pushing myself to become better.</p>

                    </FadeIn>
                    
                    <FadeIn>
                        <div className="resume-callout">
                            <a href="public/noah_resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
                        </div>
                    </FadeIn>
                    
                </div>
                <div className="about-images">
                    <FadeIn>
                        <img className="about-img-1 box-shadow-subtle" src={surfingImg} alt="Noah surfing"/>

                    </FadeIn>

                    <FadeIn>
                        <img className="about-img-2 box-shadow-subtle" src={japanImg} alt="Noah in a snowy street in Japan"/>

                    </FadeIn>

                    <FadeIn>
                        <img className="about-img-3 box-shadow-subtle" src={hackathonImg} alt="Noah giving a speech at a hackathon"/>

                    </FadeIn>


                </div>
                
            </div>
        </section>
    );

}

export default About;