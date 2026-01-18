import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/css/Projects.css";
import Button from "../components/Button";
import '../assets/css/responsive/fullpage.css';

const projectsAdd = [
  {
    id: 1,
    imgSrc: "/images/bmu.jpg",
    altText: "bmu",
    link: "https://bmu.edu.in",
  },
  {
    id: 2,
    imgSrc: "/images/plasindia.jpg",
    altText: "plasindia",
    link: "https://plastindia.edu.in/",
  },
  {
    id: 3,
    imgSrc: "/images/aeukappolo.jpg",
    altText: "aeukappolo",
    link: "https://apolloeducationuk.com/",
  },
  {
    id: 4,
    imgSrc: "/images/wikati.jpg",
    altText: "wikati",
    link: "https://www.wikatiedu.com/",
  },
  {
    id: 5,
    imgSrc: "/images/bits.jpg",
    altText: "bits pilani",
    link: "https://www.bits-pilani.ac.in/",
  },
  {
    id: 6,
    imgSrc: "/images/namtech.jpg",
    altText: "namtech",
    link: "https://www.namtech.ac/",
  },
  {
    id: 7,
    imgSrc: "/images/headstart.jpg",
    altText: "headstart",
    link: "https://headstart.biz/",
  },
];

const ProjectCard = ({ imgSrc, altText, link }) => {
  return (
    <motion.div
      className="proCon"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <figure>
        <img src={imgSrc} className="img-fluid" alt={altText} />
      </figure>

      <div className="proText">
        <Button
          text="View live website"
          link={link}
          target="_blank"
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const sortedProjects = [...projectsAdd].reverse();
  const visibleProjects = sortedProjects.slice(0, visibleCount);
  const isAllVisible = visibleCount >= sortedProjects.length;

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="heading">
          <small>Projects</small>
          <h2>
            Recent <span>Projects</span>
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="proAll">
              <AnimatePresence>
                {visibleProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    imgSrc={project.imgSrc}
                    altText={project.altText}
                    link={project.link}
                  />
                ))}
              </AnimatePresence>
            </div>

            {!isAllVisible && (
              <div className="proBtn">
                <Button
                  text="Explore More"
                  onClick={handleShowMore}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
