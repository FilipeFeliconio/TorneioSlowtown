import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignupAdmin from "./components/SignupAdmin/SignUpAdmin";
import SignupAtletaFunc from "./components/Signup/SignUp";
import Tournament from "./components/Tournament/Tournament";
import Home from "./components/Home/Home";
import CompetidoresPage from "./components/Listing/Listing";
import SignupReferee from './components/SignupReferee/SignUpReferee'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup-admin" element={<SignupAdmin />} />
        <Route path="signup-atleta" element={<SignupAtletaFunc />} />
        <Route path="tournament" element={<Tournament />} />
        <Route path="login" element={<Login />} />
        <Route path="listing" element={<CompetidoresPage />} />
        <Route path="signup-referee" element={<SignupReferee />} />
      </Routes>
    </div>
  );
}

export default App;
