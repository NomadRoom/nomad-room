import { Route, Routes } from "react-router-dom";
import { ValidationPage } from "../pages/validationUser/indedx";
import { DashboardPage } from "../pages/dashboard";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/validation" element={<ValidationPage />} />
    </Routes>
  );
};
