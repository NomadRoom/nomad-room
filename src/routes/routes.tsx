import { Route, Routes } from "react-router-dom";
import { Homepage } from "../components/Home";

export const RoutesMain = () => {
  return (
  <Routes>
    <Route path='/' element={<Homepage/>}/>
  </Routes>
  );
};
