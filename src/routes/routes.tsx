import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Homepage } from "../components/Home";

export const RoutesMain = () => {
  return (
  <Routes>
    <Route path='/' element={<Homepage/>}/>
  </Routes>
=======
import { ValidationPage } from "../pages/validationUser/indedx";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/validation" element={<ValidationPage />} />
    </Routes>
>>>>>>> cb8dd5510fe5551e731a7c37ba012983588800cb
  );
};
