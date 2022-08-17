import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./css/bootstrap.css";
import "./css/style.css";
import Login from "./Pages/LoginSignup/Login";
import { Alerm } from "./alerm/Alerm";
const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};
export default function Main() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/alarm" element={<Alerm />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </AlertProvider>
  );
}
