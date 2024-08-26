import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo/The_New_York_Times_Logo 1.png";
import userIcon from "../../assets/icons/youicon.svg";
import gamesIcon from "../../assets/icons/wordle.svg fillwordle icon.png";
import foodIcon from "../../assets/images/food recipe image.png";
import podcastIcon from "../../assets/images/biden.png";
import Modal from '../../components/Modal/Modal'; // Adjust the path as needed
import Wordle from '../../components/Wordle/Wordle'; // Adjust the path as needed

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <button className="header__button header__button--menu">
          <div className="horizontal-lines"></div>
          <div className="horizontal-lines"></div>
          <div className="horizontal-lines"></div>
        </button>

        <img className="header__logo" src={logo} alt="ny times logo" />

        <button className="header__button header__button--user">
          <img className="header__user-icon" src={userIcon} alt="user icon" />
        </button>
      </nav>
      <div className="header__sub-nav">
        <div className="header__wrapper">
          <div className="header__wrapper--inner">
            <div className="header__container">
              {/* Add onClick handler to the games icon */}
              <img 
                className="header__icon header__icon--games" 
                src={gamesIcon} 
                alt="games icon"
                onClick={handleOpenModal} // Open modal on click
                style={{ cursor: 'pointer' }} // Change cursor to pointer on hover
              />
            </div>
            <p className="header__text">Check out games</p>
          </div>
        </div>
        <div className="header__wrapper">
          <div className="header__wrapper--inner">
            <div className="header__container">
              <img className="header__icon header__icon--food" src={foodIcon} alt="food icon" />
            </div>
            <p className="header__text">Try a new recipe</p>
          </div>
        </div>
        <div className="header__wrapper">
          <div className="header__wrapper--inner">
            <div className="header__container">
              <img className="header__icon header__icon--podcast" src={podcastIcon} alt="podcast icon" />
            </div>
            <p className="header__text">Have a listen</p>
          </div>
        </div>
        {/* Remove repeated content if not needed */}
      </div>
      
      {/* Modal component with Wordle as children */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Wordle />
      </Modal>
    </header>
  );
};

export default Header;