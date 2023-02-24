import Locations from "../components/Locations";
import WeddingPlan from "../components/WeddingPlan";

function PlanPage() {
  return (
    <div>
      <div className="plan-container">
        <span className="plan-heading-1">Сватбен план</span>
        <WeddingPlan />
      </div>
      <div className="locations-container">
        <span className="plan-heading-2">Локации</span>
        <Locations />
      </div>
    </div>
  );
}

export default PlanPage;
