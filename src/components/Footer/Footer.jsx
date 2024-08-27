import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";
import nytIcon from "../../assets/icons/nyt icon.svg";
import userIcon from "../../assets/icons/youicon.svg";
import audioIcon from "../../assets/icons/audio icon.svg";
import sectionsIcon from "../../assets/icons/sections iconsectionsicon.svg";
import playIcon from "../../assets/icons/wordle.svg fillwordle icon.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/"); 
  };

  return (
    <footer className="footer">
      <nav className="footer-nav">
        {/* Navigate to Home when clicking the "ny times" icon */}
        <button className="footer-nav__button" onClick={handleNavigateHome}>
          <img className="footer-nav__icon" src={nytIcon} alt="ny times icon" />
          <p className="footer-nav__text">Today</p>
        </button>
        <button className="footer-nav__button">
          <img className="footer-nav__icon" src={audioIcon} alt="audio icon" />
          <p className="footer-nav__text">Listen</p>
        </button>
        <button className="footer-nav__button">
          <img
            className="footer-nav__icon--play"
            src={playIcon}
            alt="play icon"
          />
          <p className="footer-nav__text">Play</p>
        </button>
        <button className="footer-nav__button">
          <img
            className="footer-nav__icon"
            src={sectionsIcon}
            alt="sections icon"
          />
          <p className="footer-nav__text">Sections</p>
        </button>
        <button className="footer-nav__button">
          <img className="footer-nav__icon" src={userIcon} alt="user icon" />
          <p className="footer-nav__text">You</p>
        </button>
      </nav>
    </footer>
  );
};

export default Footer;