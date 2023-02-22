import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LocationsPage from "./pages/LocationsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/invitation" />
      <Route path="/plan&locations" element={<LocationsPage />} />
    </Routes>
  );
}

export default App;
