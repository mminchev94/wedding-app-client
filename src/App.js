import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import PlanPage from "./pages/PlanPage";
import InvitationPage from "./pages/InvitationPage";
import ConfirmPage from "./pages/ConfirmPage";

function App() {
  const location = useLocation();
  if (location.pathname === "/404") {
    document.body.style.backgroundImage = "none";
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/invitation" element={<ConfirmPage />} />
      <Route path="/invitation/:code" element={<InvitationPage />} />
      <Route path="/plan&locations" element={<PlanPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
