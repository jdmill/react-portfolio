import React from "react";
// import "./header.css";
import ResumeBtn from "./ResumeBtn";
import SocialBtns from "./SocialBtns";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Welcome, I'm</h5>
        <h1>Jonathan Miller</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <SocialBtns />
        <ResumeBtn />

        <div className="pic">
          <img src="assets/profile-pic.png"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
