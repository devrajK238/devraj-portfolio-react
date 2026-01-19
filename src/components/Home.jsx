// src/Home.js
import React from "react";
import "../assets/css/responsive/fullpage.css";
import "../assets/css/Home.css";
import Button from "./Button";
import About from "./About";
import Projects from "./Projects";
import Process from "./Process";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="myInfo">
                <small>My Name</small>

                <h1>
                  Hi, I’m <strong>Dev Raj</strong> 👋 <br />
                  <span>Frontend Developer (React & JavaScript)</span>
                </h1>

                <p>
                  I am a frontend developer specializing in HTML, CSS,
                  JavaScript, Bootstrap, WordPress, and React. I build modern,
                  responsive, and high-performance web interfaces with clean
                  code and a strong focus on usability and scalability. I enjoy
                  turning ideas into real-world web applications that deliver
                  impact.
                </p>

                <div className="infoBtn">
                  <Button
                    text="📄 Download CV"
                    link="/images/Devraj_Frontend_Developer.pdf"
                    download
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="figure">
                <img
                  src="../images/me.png"
                  className="img-fluid"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
