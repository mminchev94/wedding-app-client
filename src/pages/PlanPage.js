import Locations from "../components/Locations";
import WeddingPlan from "../components/WeddingPlan";

function PlanPage() {
  return (
    <div>
      <span>Сватбен план</span>
      <WeddingPlan />
      <span>Локации</span>
      <Locations />
    </div>
  );
}

export default PlanPage;
