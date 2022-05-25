import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/thisiswarmockup.png";
import Img2 from "../../assets/EventPlan-SC.png";
import Img3 from "../../assets/weather-dashboard.png";
import Img4 from "../../assets/dayplanner.png";
import Img5 from "../../assets/text-editor.png";
import Img6 from "../../assets/note-taker.png";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <a href="https://github.com/jdmill/this-is-war" target="_blank">
            <div className="portfolio-item-img">
              <img src={Img1} alt="This is war, mockup" />
            </div>
            <h3>ThisIsWar</h3>
          </a>
        </article>
        <article className="portfolio-item">
          <a href="https://github.com/jdmill/Eventplan" target="_blank">
            <div className="portfolio-item-img">
              <img src={Img2} alt="EventPlan" />
            </div>
            <h3>EventPlan</h3>
          </a>
        </article>
        <article className="portfolio-item">
          <a
            href="https://github.com/jdmill/weather-dashboard-for-winners"
            target="_blank"
          >
            <div className="portfolio-item-img">
              <img src={Img3} alt="Weather Dashboard" />
            </div>
            <h3>Weather Dashboard</h3>
          </a>
        </article>
        <article className="portfolio-item">
          <a
            href="https://github.com/jdmill/day-planner-for-chumps"
            target="_blank"
          >
            <div className="portfolio-item-img">
              <img src={Img4} alt="Day Planner" />
            </div>
            <h3>Day Planner</h3>
          </a>
        </article>
        <article className="portfolio-item">
          <a
            href="https://github.com/jdmill/regular-text-editor"
            target="_blank"
          >
            <div className="portfolio-item-img">
              <img src={Img5} alt="Text Editor" />
            </div>
            <h3>Text Editor</h3>
          </a>
        </article>
        <article className="portfolio-item">
          <a href="https://github.com/jdmill/nifty-note-taker" target="_blank">
            <div className="portfolio-item-img">
              <img src={Img6} alt="This is war, mockup" />
            </div>
            <h3>Note Taker</h3>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
