import { Route, Routes } from "react-router-dom";
import BgVideo from "./components/BgVideo";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <BgVideo />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/confirm" />
        <Route path="/plan&locations" />
      </Routes>
    </div>
  );
}

export default App;
