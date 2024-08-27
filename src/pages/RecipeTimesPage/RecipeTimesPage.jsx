import React from 'react';
import './RecipeTimesPage.scss';
import recipeImage from '../../assets/images/recipe-image.png';
import saveIcon from '../../assets/icons/save-icon.svg';
import shareIcon from '../../assets/icons/share-circle-icon.svg';
import starIcon from '../../assets/icons/star-icon.svg';

function RecipeTimesPage() {
  return (
    <div className="recipe">
    <h1 className="recipe__title">Crispy Coconut Rice With Tofu</h1>
    <h3 className="recipe__author">By Hetty Lui McKinnon</h3>
    <img src={recipeImage} alt="Crispy Coconut Rice With Tofu" className="recipe__image" />

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
      <div className="recipe__detail">
        <h3 className="recipe__detail-title">Notes</h3>
        <p className="recipe__detail-info detail-link"><a href="/">Read 80 community notes</a></p>
      </div>
      <div className="recipe__actions">
        <button className="recipe__save-button">
          <img src={saveIcon} alt="Save" /> Save
        </button>
        <button className="recipe__share-button">
          <img src={shareIcon} alt="Share" />
        </button>
      </div>
    </div>

    <div className="recipe__ingredients">
      <h3 className="recipe__ingredients-title">INGREDIENTS</h3>
      <p className="recipe__yield"><strong>Yield:</strong> 4 servings</p>
      <ul className="recipe__ingredients-list">
        <li>4 heaped cups cold cooked white rice</li>
        <li>3 to 4 tablespoons red or green Thai curry paste</li>
        <li>2 tablespoons soy sauce or tamari</li>
        <li>1(14-ounce) package extra firm tofu, drained and crumbled</li>
        <li>¾ cup shredded unsweetened coconut</li>
        <li>1 tablespoon toasted sesame oil</li>
        <li>4 scallions, trimmed and thinly sliced</li>
        <li>4 makrut lime leaves, finely sliced (optional)</li>
        <li>Kosher salt (such as Diamond Crystal)</li>
        <li>Neutral oil, such as vegetable or grapeseed</li>
        <li>5 ounces lettuce leaves, such as Romaine or butterhead</li>
        <li>1 lime or lemon, cut into 4 wedges</li>
        <li>Handful of mint or cilantro leaves (or both)</li>
        <li>1 long red chile, finely sliced</li>
      </ul>
    </div>

    <div className="recipe__preparation">
      <h3 className="recipe__preparation-title">PREPARATION</h3>
      <p className="recipe__preparation-step">Step 1</p>
      <p className="recipe__preparation-step__text">In a large bowl, mix together the rice, curry paste, soy sauce or tamari, tofu, coconut, sesame oil, scallions and makrut lime leaves (if using). Once it’s combined, taste and if it needs more seasoning, add more curry paste or a pinch or two of salt, to your liking.
      </p>
      <p className="recipe__preparation-step">Step 2</p>
      <p className="recipe__preparation-step__text">Heat a large (12-inch) well-seasoned cast iron or nonstick skillet on medium high for about 2 minutes. Add 2 tablespoons of neutral oil and add half the rice mixture, pressing down firmly with a spatula, and leave to cook for 4 to 5 minutes, until a golden crispy crust has formed on the bottom. Drizzle the top of the rice with a little neutral oil. Now, using a spatula, break rice into large pieces and flip over, cooking the other side of the rice for 3 to 5 minutes until crispy. When ready, remove the first batch of crispy rice from the pan and repeat with the remaining rice.
      </p>
      <p className="recipe__preparation-step">Step 3</p>
      <p className="recipe__preparation-step__text">To serve, add the rice to bowls and serve with lettuce, lime, herbs and red chile on the side.
      </p>
    </div>
  </div>
  );
}

export default RecipeTimesPage;