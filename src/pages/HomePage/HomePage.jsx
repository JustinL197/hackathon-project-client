import React from "react";
import "./HomePage.scss";
import homePageImage from "../../assets/images/home page image.png"
import tennisImage from "../../assets/images/tennis player image.png"

function HomePage() {
  return (
    <section className="homepage">
      <article>
        <h1 className="homepage__title">How a Federal Court in New Orleans Is Driving the Conservative Agenda
        </h1>
        <p className="homepage__text">Today, the U.S. Fifth Circuit Court of Appeals is an outlier. But a Trump victory in November could transform it into the standard-bearer of MAGA-era jurisprudence.</p>
        <img className="homepage__image" src={homePageImage} alt="image of political rally" />
      </article>
      <article>
        <h2 className="homepage__title">US Open 2024 tennis live updates: Day 1 latest as Coco Gauff wins, Novak Djokovic in action later
        </h2>
        <p className="homepage__text">Play is in full swing at the 2024 U.S. Open in New York, where Coco Gauff has defeated Varvara Gracheva. Novak Djokovic will take on Radu Albot.</p>
        <img className="homepage__image" src={tennisImage} alt="image of Coco Gauff" />
      </article>
    </section>
  );
};

export default HomePage;