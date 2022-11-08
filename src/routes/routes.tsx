import { Route, Routes } from "react-router-dom";
import { ValidationPage } from "../pages/validationUser/indedx";
import { DashboardPage } from "../pages/dashboard";
import { HomePage } from "../pages/home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/validation" element={<ValidationPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
