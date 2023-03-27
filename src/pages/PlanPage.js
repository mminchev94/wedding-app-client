import Locations from "../components/Locations";
import WeddingPlan from "../components/WeddingPlan";
import weddingring from "../assets/weddingring.png";
import church from "../assets/church.png";
import champagne from "../assets/champagne.png";
import photo from "../assets/photo.png";
import restaurant from "../assets/restaurant.png";
import infinity from "../assets/infinity.png";

function PlanPage() {
  const weddingPlanData = [
    {
      icon: weddingring,
      time: "15:00",
      text: "Граждански брак в Ритуална зала гр. Добрич",
      class: "ritual",
    },
    {
      icon: photo,
      time: "15:30",
      text: "Фотосесия с младоженците",
      class: "photo-session",
    },
    {
      icon: church,
      time: "16:30",
      text: "Църковен ритуал в храм 'Св. Троица'",
      class: "church-ritual",
    },
    {
      icon: restaurant,
      time: "18:30",
      text: "Поздравления, подаръци и настаняване в р-т 'Ривера'",
      class: "restaurant",
    },
    {
      icon: [champagne, infinity],
      text: "Купон до зори",
      class: "party",
    },
  ];

  return (
    <div className="planpage-container">
      <div className="plan-container">
        <span className="plan-header">Сватбен план</span>
        <WeddingPlan weddingPlanData={weddingPlanData} />
      </div>
      <div className="locations-container">
        <span className="locations-header">Локации (гр. Добрич)</span>
        <Locations />
      </div>
    </div>
  );
}

export default PlanPage;
