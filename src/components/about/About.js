import React from "react";
import "./about.css";
import Pic from "../../assets/suit-pic.png";
import { BsPersonSquare } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import Resume from "../../assets/JonMillerResume.pdf";

export const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-me">
          <div className="pic">
            <div className="pic-outline">
              <img src={Pic} alt="It's just me"></img>
            </div>
          </div>
        </div>
        <div className="about-me-content">
          <div className="about-me-cards">
            <article className="about-me-card">
              <FaUserGraduate className="about-card-icon" />
              <h5>Diploma</h5>
              <p>U.N.G</p>
              <p>B.S. Computer Science</p>
            </article>
            <article className="about-me-card">
              <BsPersonSquare className="about-card-icon" />
              <h5>Certification</h5>
              <p>Georgia Tech</p>
              <p>M.E.R.N Fullstack</p>
            </article>
            <article className="about-me-card">
              <BsPersonSquare className="about-card-icon" />
              <h5>Experience</h5>
              <p>2+ Years IT</p>
              <p>6+ Years Film</p>
            </article>
          </div>
          <p className="about-me-para">
            Full-stack web developer leveraging experience working in a
            design-centered work environment, a bachelor’s of computer science,
            and new skills acquired through a Georgia Tech Full-Stack
            Development Bootcamp. Skills in Frontend and Backend development
            coupled with a strong drive to work in collaborative environments
            where deadlines are met and quality products are delivered. My
            strong interpersonal ability and time management skills allow me to
            work effectively on any team. Passionately approaching problems
            using my unique perspective, I strive to provide users with a
            meaningful encounter. Every step of the way I look to answer the
            question of why this code is being developed from a user perspective
            so that the end product is a seamless bespoke experience.
          </p>
          <div className="btn-div">
            <a
              href={Resume}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
