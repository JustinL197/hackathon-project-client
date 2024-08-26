import React from 'react';
import './RecipePartTwo.scss'; 
import tofuRiceImage from '../../assets/images/food recipe image.png';
import starIcon from '../../assets/icons/star-icon.svg';

const RecipePartTwo = () => {
  return (
    <div className="recipe">
        <h1 className="recipe__title">Crispy Coconut Rice With Tofu</h1>
        <h3 className="recipe__author">By Hetty Lui McKinnon</h3>
        <img src={tofuRiceImage} alt="Crispy Coconut Rice With Tofu" className="recipe__image" />

        <div className="recipe__details">
            <div className="recipe__detail">
                <h3 className="recipe__detail-title">Total Time</h3>
                <p className="recipe__detail-info">30 minutes</p>
            </div>
            <div className="recipe__detail">
                <h3 className="recipe__detail-title">Rating</h3>
                <div className="recipe__rating">
                <span className="recipe__rating-number">4</span>
                <img src={starIcon} alt="Star" className="recipe__star-icon" />
                <img src={starIcon} alt="Star" className="recipe__star-icon" />
                <img src={starIcon} alt="Star" className="recipe__star-icon" />
                <img src={starIcon} alt="Star" className="recipe__star-icon" />
                <img src={starIcon} alt="Star" className="recipe__star-icon recipe__star-icon--inactive" />
                <span className="recipe__rating-count">(995)</span>
                </div>
            </div>
        </div>
        <button className="recipe-button">
        See Recipe
        </button>
    </div>
  );
}

export default RecipePartTwo;