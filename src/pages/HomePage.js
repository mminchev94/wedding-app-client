import React from "react";
import image from "../assets/image.jpg";

function HomePage() {
  return (
    <div className="home-container">
      <h1 className="first-heading">Сватбено тържество</h1>
      <h1 className="second-heading">Владимира и Милен</h1>
      <p className="location">гр. Добрич</p>
      <p className="date">2 Септември 2023</p>
      <img class="our-image" src={image} alt="image" />
    </div>
  );
}

export default HomePage;
