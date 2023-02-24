import weddingring from "../assets/weddingring.png";
import church from "../assets/church.png";
import champagne from "../assets/champagne.png";
import photo from "../assets/photo.png";
import restaurant from "../assets/restaurant.png";
import infinity from "../assets/infinity.png";

function WeddingPlan() {
  return (
    <div>
      <div className="ritual">
        <img className="icons" src={weddingring} alt="weddingring" />
        <span>15:00</span>
        <span>Граждански брак в Ритуална зала гр. Добрич</span>
      </div>
      <div className="photo-session">
        <img className="icons" src={photo} alt="photosession" />
        <span>15:30</span>
        <span>Фотосесия с младоженците</span>
      </div>
      <div className="church-ritual">
        <img className="icons" src={church} alt="church" />
        <span>16:30</span>
        <span>Църковен ритуал в храм "Св. Троица"</span>
      </div>
      <div className="restaurant">
        <img className="icons" src={restaurant} alt="restaurant" />
        <span>18:30</span>
        <span>
          Поздравления, подаръци и настаняване в ресторант "Green Palace"
        </span>
      </div>
      <div className="party">
        <img className="icons" src={champagne} alt="champagne" />
        <img className="icons" src={infinity} alt="infinity" />
        <span>Купон до зори</span>
      </div>
    </div>
  );
}

export default WeddingPlan;
