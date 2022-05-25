import React from "react";
import "./skills.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiNodedotjs,
  SiJquery,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="container skills-container">
        <div className="frontend">
          <h2>Frontend Development</h2>
          <div className="skills-content">
            <SiHtml5 />
            <h3>HTML</h3>
            <p className="text-light">Experienced</p>
          </div>
          <div className="skills-content">
            <SiCss3 />
            <h3>CSS</h3>
            <p className="text-light">Experienced</p>
          </div>
          <div className="skills-content">
            <SiJavascript />
            <h3>Javascript</h3>
            <p className="text-light">Experienced</p>
          </div>
          <div className="skills-content">
            <SiReact />
            <h3>React</h3>
            <p className="text-light">Experienced</p>
          </div>
          <div className="skills-content">
            <SiBootstrap />
            <h3>BootStrap</h3>
            <p className="text-light">Experienced</p>
          </div>
          <div className="skills-content">
            <SiJquery />
            <h3>jQuery</h3>
            <p className="text-light">Experienced</p>
          </div>
        </div>

        <div className="backend">
          <h2>Backend Development</h2>
          <div className="skills-content">
            <SiExpress />
            <h3>Express</h3>
            <p className="text-light">Experienced</p>
          </div>
          <div className="skills-content">
            <SiMongodb />
            <h3>MongoDB</h3>
            <p className="text-light">Experienced</p>
          </div>
          <div className="skills-content">
            <SiNodedotjs />
            <h3>Node.js</h3>
            <p className="text-light">Experienced</p>
          </div>
          <div className="skills-content">
            <SiMysql />
            <h3>MySQL2</h3>
            <p className="text-light">Experienced</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
