import React from "react";
import { BsLinkedin, BsGithub, BsFillFileEarmarkPdfFill } from "react-icons/bs";

import Resume from "../../assets/JonMillerResume.pdf";

const SocialBtns = () => {
  return (
    <div className="social-btns">
      <a href={Resume} target="_blank" rel="noreferrer">
        <BsFillFileEarmarkPdfFill />
      </a>
      <a
        href="https://www.linkedin.com/in/jdmill/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.github.com/jdmill" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialBtns;
