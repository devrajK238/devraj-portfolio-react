import React from "react";
import "../assets/css/About.css";
import '../assets/css/responsive/fullpage.css';
import Button from "./Button";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-12">
              <div className="abCon">
                <small>About Me</small>
                <h2>
                  <span>Frontend Developer</span>
                </h2>
                <div className="infos">
                    <p>
                  I’m Dev Raj, a passionate and detail-oriented Frontend
                  Developer with over 4 years of experience in building
                  responsive, user-friendly web applications. I specialize in
                  transforming design concepts into clean, efficient, and
                  maintainable code that delivers smooth and engaging user
                  experiences.
                </p>

                <p>
                  With strong expertise in HTML5, CSS3, JavaScript, React.js,
                  jQuery, and WordPress, I enjoy working on modern interfaces
                  that focus on performance, accessibility, and scalability. I
                  collaborate effectively with designers, backend developers,
                  and cross-functional teams to ensure high-quality and timely
                  project delivery.
                </p>

                <p>
                  I’m committed to continuous learning and staying updated with
                  the latest frontend technologies and best practices. My goal
                  is to create impactful digital solutions while growing
                  professionally and contributing value to every project I work
                  on.
                </p>
                </div>
                <div className="infoBtn">
                  <Button text="📄 Download CV" link="../images/Devraj_Frontend_Developer.pdf"
  download />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
