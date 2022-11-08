import { Route, Routes } from "react-router-dom";
import { ValidationPage } from "../pages/validationUser/indedx";
import { Homepage } from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/validation" element={<ValidationPage />} />
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  );
};
