import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import PlanPage from "./pages/PlanPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/invitation" />
      <Route path="/plan&locations" element={<PlanPage />} />
    </Routes>
  );
}

export default App;
