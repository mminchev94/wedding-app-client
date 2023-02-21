import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/confirm" />
        <Route path="/plan&locations" />
      </Routes>
    </div>
  );
}

export default App;
