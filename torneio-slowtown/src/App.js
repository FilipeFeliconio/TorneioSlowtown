import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/SignUp";
import Tournament from "./components/Tournament/Tournament";
import Home from "./components/Home/Home";
import CompetidoresPage from "./components/Listing/Listing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="tournament" element={<Tournament />} />
        <Route path="login" element={<Login />} />
        <Route path="listing" element={<CompetidoresPage />} />
      </Routes>
    </div>
  );
}

export default App;
