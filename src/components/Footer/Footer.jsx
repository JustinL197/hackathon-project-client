import React from "react";
import "./Footer.scss";
import nytIcon from "../../assets/icons/nyt icon.svg"
import userIcon from "../../assets/icons/youicon.svg"
import audioIcon from "../../assets/icons/audio icon.svg"
import sectionsIcon from "../../assets/icons/sections iconsectionsicon.svg"
import playIcon from "../../assets/icons/wordle.svg fillwordle icon.png"

const Footer = () => {

        return (
            <footer className="footer">
                 <button className="footer__button">
                    <img className="footer__icon" src={nytIcon} alt="ny times icon"/>
                    <p className="footer__text">Today</p>
                </button>
                <button className="footer__button"> 
                    <img className="footer__icon" src={audioIcon} alt="audio icon"/> 
                    <p className="footer__text">Listen</p>
                </button>
                <button className="footer__button"> 
                    <img className="footer__icon--play" src={playIcon} alt="play icon"/> 
                    <p className="footer__text">Play</p>
                </button>
                <button className="footer__button"> 
                    <img className="footer__icon" src={sectionsIcon} alt="sections icon"/> 
                    <p className="footer__text">Sections</p>
                </button>
                <button className="footer__button"> 
                    <img className="footer__icon" src={userIcon} alt="user icon"/> 
                    <p className="footer__text">You</p>
                </button>
            </footer>
        );
    };
     
export default Footer;