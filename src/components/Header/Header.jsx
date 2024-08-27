import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo/The_New_York_Times_Logo 1.png";
import userIcon from "../../assets/icons/youicon.svg";
import gamesIcon from "../../assets/icons/wordle.svg fillwordle icon.png";
import foodIcon from "../../assets/images/food recipe image.png";
import podcastIcon from "../../assets/images/biden.png";
import nytIcon from "../../assets/icons/nyt icon.svg"
import Modal from '../../components/Modal/Modal';
import Wordle from '../../components/Wordle/Wordle'; 
import Recipe from '../../components/Recipe/Recipe'; 
import RecipePartTwo from '../../components/RecipePartTwo/RecipePartTwo'; 

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenWordleModal = () => {
    setModalOpen(true);
    setModalContent('wordle'); 
  };

  const handleOpenRecipeModal = () => {
    setModalOpen(true);
    setModalContent('recipe'); 
  };

  const handleOpenRecipePartTwoModal = () => {
    setModalOpen(true);
    setModalContent('recipePartTwo');
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  const handleProgressComplete = () => {
    if (modalContent === 'wordle') {
      setModalContent('recipe');
    } else if (modalContent === 'recipe') {
      setModalContent('recipePartTwo');
    } else if (modalContent === 'recipePartTwo') {
      handleCloseModal();
    }
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <button className="header__button header__button--dp-none">
          <img className="header__user-icon" src={userIcon} alt="ny times logo"/> 
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
              <img 
                className="header__icon header__icon--games" 
                src={gamesIcon} 
                alt="games icon"
                onClick={handleOpenWordleModal} 
                style={{ cursor: 'pointer' }}
              />
            </div>
            <p className="header__text">Check out games</p>
          </div>
        </div>
        <div className="header__wrapper">
          <div className="header__wrapper--inner">
            <div className="header__container">
              <img 
                className="header__icon header__icon--food" 
                src={foodIcon} 
                alt="food icon"
                onClick={handleOpenRecipeModal} 
                style={{ cursor: 'pointer' }}
              />
            </div>
            <p className="header__text">Try a new recipe</p>
          </div>
        </div>
        <div className="header__wrapper">
          <div className="header__wrapper--inner">
            <div className="header__container">
              <img 
                className="header__icon header__icon--podcast" 
                src={podcastIcon} 
                alt="podcast icon"
                style={{ cursor: 'pointer' }}
              />
            </div>
            <p className="header__text">Have a listen</p>
          </div>
        </div>
        <div className="header__wrapper">
          <div className="header__wrapper--inner">
            <div className="header__container">
              <img 
                className="header__icon header__icon--nyt" 
                src={nytIcon} 
                alt="podcast icon"
                style={{ cursor: 'pointer' }}
              />
            </div>
            <p className="header__text">Whats new</p>
          </div>
        </div>
      </div>
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        contentType={modalContent}
        onProgressComplete={handleProgressComplete} 
      >

        {modalContent === 'wordle' && <Wordle />}
        {modalContent === 'recipe' && <Recipe />}
        {modalContent === 'recipePartTwo' && <RecipePartTwo />}
      </Modal>
    </header>
  );
};

export default Header;