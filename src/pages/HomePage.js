import vladi_milen from "../assets/vladi_milen.jpg";

function HomePage() {
  return (
    <div className="home-container">
      <h1 className="first-heading">Сватбено тържество</h1>
      <h1 className="second-heading">Владимира и Милен</h1>
      <p className="location">гр. Добрич</p>
      <p className="date">2 Септември 2023</p>
      <img className="our-image" src={vladi_milen} alt="vladi_milen" />
    </div>
  );
}

export default HomePage;
