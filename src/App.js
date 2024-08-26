import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeTimesPage from "./pages/RecipeTimesPage/RecipeTimesPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main className="app__main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe-times" element={<RecipeTimesPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;