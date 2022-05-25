import React from "react";
import "./about.css";
import Pic from "../../assets/profile-pic.png";
import { BsPersonSquare } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about">
      <h5>Learn</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img-container">
            <div className="about-me-img">
              <img src={Pic} alt="About Section Profile" />
            </div>
          </div>
        </div>
        <div className="about-me-content">
          <div className="about-me-cards">
            <article className="about-me-card">
              <FaUserGraduate className="about-card-icon" />
              <h5>Diploma</h5>
              <p>University of North Georgia</p>
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
        </div>
      </div>
    </section>
  );
};

export default About;
