import React from 'react';
import tofuBackground from '../../assets/images/tofu-story.png';
import './Recipe.scss';

const Recipe = () => {
  return (
    <div className="recipe-modal-content" style={{ backgroundImage: `url(${tofuBackground})` }}>
      <div className="recipe-text">
        <p className="recipe-text-body1">The star of today's dish</p>
        <h3 className="recipe-text-heading1">Tofu</h3>
        <p className="recipe-text-body2">Did you know that tofu is high in protein? And it has all the essential amino acids.</p>
      </div>
    </div>
  );
};

export default Recipe;