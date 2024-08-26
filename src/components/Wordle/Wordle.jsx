import React, { useState, useEffect } from 'react';
import './Wordle.scss';

const Wordle = () => {
  const targetWord = 'GAMES';
  const attempts = ['SPEED', 'TIMES', 'GAMES'];
  const maxAttempts = 6; // Maximum number of attempts
  const wordLength = targetWord.length;

  const [currentPhase, setCurrentPhase] = useState(0);

  // Initialize states for colors, animations, and visibility
  const [colors, setColors] = useState(
    Array.from({ length: maxAttempts }, () => Array(wordLength).fill('')) // Initially, no color
  );

  const [animateClass, setAnimateClass] = useState(
    Array.from({ length: maxAttempts }, () => Array(wordLength).fill('')) // Initially, no animation
  );

  const [revealedLetters, setRevealedLetters] = useState(
    Array.from({ length: maxAttempts }, () => Array(wordLength).fill(false)) // Initially, all letters are hidden
  );

  // Function to calculate letter colors based on attempts and target word
  const calculateColors = (word, target) => {
    const result = ['', '', '', '', ''];
    const targetLetterCount = {};

    // Count occurrences of each letter in the target word
    for (let letter of target) {
      targetLetterCount[letter] = (targetLetterCount[letter] || 0) + 1;
    }

    // Determine color for each letter in the attempt
    for (let i = 0; i < word.length; i++) {
      if (word[i] === target[i]) {
        result[i] = 'green'; // Correct letter in the correct position
        targetLetterCount[word[i]]--;
      }
    }

    for (let i = 0; i < word.length; i++) {
      if (result[i] !== 'green') {
        if (target.includes(word[i]) && targetLetterCount[word[i]] > 0) {
          result[i] = 'yellow'; // Correct letter in the wrong position
          targetLetterCount[word[i]]--;
        } else {
          result[i] = 'grey'; // Incorrect letter
        }
      }
    }

    return result;
  };

  // Effect to handle the reveal of letters and colors separately
  useEffect(() => {
    if (currentPhase < attempts.length) {
      const revealTimer = setTimeout(() => {
        const newRevealedLetters = [...revealedLetters];
        newRevealedLetters[currentPhase] = Array(wordLength).fill(true); // Reveal letters for the current row
        setRevealedLetters(newRevealedLetters);

        const colorTimer = setTimeout(() => {
          const newColors = [...colors];
          const newAnimations = [...animateClass];

          newColors[currentPhase] = calculateColors(
            attempts[currentPhase],
            targetWord
          );

          newAnimations[currentPhase] = Array(wordLength).fill('animate');
          setColors(newColors);
          setAnimateClass(newAnimations);

          setCurrentPhase((prevPhase) => prevPhase + 1);
        }, 1000); // Delay before showing colors

        return () => clearTimeout(colorTimer);
      }, 1000); // Delay to show letters first

      return () => clearTimeout(revealTimer);
    }
  }, [currentPhase]);

  return (
    <div className="wordle-container">
      <div>Wordle</div>
      {Array.from({ length: maxAttempts }).map((_, rowIndex) => (
        <div key={rowIndex} className="wordle-row">
          {Array.from({ length: wordLength }).map((_, colIndex) => (
            <div
              key={colIndex}
              className={`wordle-letter ${colors[rowIndex][colIndex]} ${
                animateClass[rowIndex][colIndex]
              } ${revealedLetters[rowIndex][colIndex] ? 'visible' : 'default'}`} // Ensure all squares are rendered
            >
              {revealedLetters[rowIndex][colIndex] ? attempts[rowIndex][colIndex] : ''}
            </div>
          ))}
        </div>
      ))}
      <button className="play-button">
        Play
      </button>
    </div>
  );
};

export default Wordle;