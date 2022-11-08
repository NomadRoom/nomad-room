import { Route, Routes } from "react-router-dom";
import { ValidationPage } from "../pages/validationUser/indedx";

import { DashboardPage } from "../pages/dashboard";
import { HomePage } from "../pages/home";


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/validation" element={<ValidationPage />} />
    </Routes>
  );
};
