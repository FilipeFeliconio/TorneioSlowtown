import "./App.css";
import { Routes, Route } from "react";
import Signup from "./components/Signup/SignUp";
import Login from "./components/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
export default App;
