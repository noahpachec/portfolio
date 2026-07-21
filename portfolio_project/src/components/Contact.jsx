import FadeIn from "./FadeIn";


function Button({ text, url }) {
    return (
        <a href={url}
           className="button box-shadow-subtle"
           target="_blank"
           rel="noopener noreferrer"
        >
            {text}
        </a>
    );

}



function Contact() {
    return (
        <section id="contact">
            
        <FadeIn>
            <div id="contact-card" className="box-shadow-subtle">
            <h1 className="sub-header">Let's get in touch</h1>
            <Button text="My Linkedin" url="https://www.linkedin.com/in/noahpacheco/"/>
            <Button text="My Email" url="mailto:noahpachec@gmail.comsubject=Website%20Enquiry" />
            <Button text="My Phone Number" url="tel:+61491628190" />
        </div>
        </FadeIn>



        </section>
    );

}

export default Contact;