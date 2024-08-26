import React from "react";
import "./Header.scss";
import logo from "../../assets/logo/The_New_York_Times_Logo 1.png"
import userIcon from "../../assets/icons/youicon.svg"
import gamesIcon from "../../assets/icons/wordle.svg fillwordle icon.png"
import foodIcon from "../../assets/images/food recipe image.png"
import podcastIcon from "../../assets/images/biden.png"


const Header = () => {

        return (
            <header className="header">
                <nav className="header__nav">
                    <button className="header__button header__button--menu">
                        <div className="horizontal-lines"></div>
                        <div className="horizontal-lines"></div>
                        <div className="horizontal-lines"></div>
                    </button>

                    <img className="header__logo" src={logo} alt="ny times logo"/>

                    <button className="header__button header__button--user">
                         <img className="header__user-icon" src={userIcon} alt="ny times logo"/> 
                    </button>
                </nav>
                <div className="header__sub-nav">
                    <div className="header__wrapper">
                        <div className="header__wrapper--inner">
                            <div className="header__container">
                                <img className="header__icon header__icon--games" src={gamesIcon} alt="ny times logo"/> 
                            </div>
                            <p className="header__text">check out games</p>
                        </div>
                    </div>
                    <div className="header__wrapper">
                        <div className="header__wrapper--inner">
                            <div className="header__container">
                                <img className="header__icon header__icon--food" src={foodIcon} alt="ny times logo"/> 
                            </div>
                            <p className="header__text">Try a new recipe</p>
                        </div>
                    </div>
                    <div className="header__wrapper">
                        <div className="header__wrapper--inner">
                            <div className="header__container">
                                <img className="header__icon header__icon--podcast" src={podcastIcon} alt="ny times logo"/> 
                            </div>
                            <p className="header__text">Have a listen</p>
                        </div> 
                    </div>
                    <div className="header__wrapper">
                        <div className="header__wrapper--inner">
                            <div className="header__container">
                                <img className="header__icon header__icon--games" src={gamesIcon} alt="ny times logo"/> 
                            </div>
                            <p className="header__text">check out games</p>
                        </div>
                    </div>
                    <div className="header__wrapper">
                        <div className="header__wrapper--inner">
                            <div className="header__container">
                                <img className="header__icon header__icon--games" src={gamesIcon} alt="ny times logo"/> 
                            </div>
                            <p className="header__text">check out games</p>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
     
export default Header;