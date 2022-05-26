import React from "react";
import "./footer.css";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="footer">
      <p class="love">
        Made with <AiTwotoneHeart /> by Jonathan Miller
      </p>
      <ul className="footer-contact">
        <li>
          <a
            href="https://www.linkedin.com/in/jdmill/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/jdmill"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
