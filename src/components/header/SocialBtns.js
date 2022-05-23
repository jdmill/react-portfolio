import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialBtns = () => {
  return (
    <div className="social-btns">
      <a href="https://www.linkedin.com/in/jdmill/" target={"_blank"}>
        <BsLinkedin />
      </a>
      <a href="https://github.com/jdmill/" target={"_blank"}>
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialBtns;
