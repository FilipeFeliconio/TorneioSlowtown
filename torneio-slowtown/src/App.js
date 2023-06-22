import "./App.css";
import { Routes, Route } from "react";
import Signup from "../Signup/SignUp";
import Login from "../Login/Login";

function App() {
  return (
    <>
      <div>
        <p>TESTE HOME</p>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
export default App
