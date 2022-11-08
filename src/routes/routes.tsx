import { Route, Routes } from "react-router-dom";
import { ValidationPage } from "../pages/validationUser/indedx";
import { DashboardPage } from "../pages/dashboard";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { ProtectRoute } from "./ProtectRoute";
import { RoomPage } from "../pages/room";


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />


      <Route element={<ProtectRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/validation" element={<ValidationPage />} />
      </Route>
      <Route path="/room/:id" element={<RoomPage />} />
    </Routes>
  );
};
