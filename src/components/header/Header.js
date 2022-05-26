import React from "react";
import "./header.css";
// import Pic from "../../assets/pexels-scott-webb.jpg";
import SocialBtns from "../header/SocialBtns";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h1 className="name">Jonathan Miller</h1>
        <h5 className="text-light title">Fullstack Developer</h5>
        <SocialBtns />
        {/* <div className="her0">
          <img src={Pic} alt="hero"></img>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
