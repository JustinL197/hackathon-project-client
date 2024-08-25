import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeTimesPage from "./pages/RecipeTimesPage/RecipeTimesPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main className="app__main-content">
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe-times" element={<RecipeTimesPage />} />
           
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

