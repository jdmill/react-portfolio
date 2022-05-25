import React from "react";
import "./header.css";
import Pic from "../../assets/suit-pic.png";
import SocialBtns from "../header/SocialBtns";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h1 className="name">Jonathan Miller</h1>
        <h5 className="text-light title">Fullstack Developer</h5>
        <SocialBtns />
        <div className="pic">
          <div className="pic-outline">
            <img src={Pic} alt="It's just me"></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
