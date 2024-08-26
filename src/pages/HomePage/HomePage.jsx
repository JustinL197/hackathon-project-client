import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal'; // Adjust the path as needed
import Wordle from '../../components/Wordle/Wordle'; // Adjust the path as needed

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="home-page">
      <header className="home-page__header">
        <h1>Welcome to HomePage</h1>
        {/* Other homepage content */}
      </header>

      <button onClick={handleOpenModal} className="home-page__wordle-button">
        Play Wordle Story
      </button>

      {/* Modal component with Wordle as children */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Wordle />
      </Modal>
    </div>
  );
};

export default HomePage;