import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/thisiswarmockup.png";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <h3>Title Here</h3>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
