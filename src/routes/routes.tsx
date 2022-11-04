import { Route, Routes } from "react-router-dom";
import { ValidationPage } from "../pages/validationUser/indedx";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/validation" element={<ValidationPage />} />
    </Routes>
  );
};
