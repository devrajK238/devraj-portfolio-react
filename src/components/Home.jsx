// src/Home.js
import React from 'react';
import '../assets/css/responsive/fullpage.css';
import '../assets/css/Home.css';
import Button from './Button';
import About from './About';
import Projects from './Projects';
import Process from './Process';
import Contact from './Contact';
import Footer from './Footer';
const Home = () => {
 
    return (
        <>
            <section className="hero" id='home'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="myInfo">
                                <small>My Name</small>
                                <h1>Hi, I’m Dev Raj 👋 <br /> <span>FrontEnd Developer</span></h1>
                                <p>I specialize in building modern, responsive, and user-friendly web interfaces. With a strong focus on clean design and performance, I enjoy turning ideas into engaging digital experiences. I’m passionate about continuous learning, collaborating with teams, and delivering high-quality solutions that create real impact.</p>
                                <div className="infoBtn">
                                    <Button text="📄 Download CV" link="../images/Devraj_Frontend_Developer.pdf"
  download />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="figure">
                                <img src="../images/me.png" className='img-fluid' alt="banner" />
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
