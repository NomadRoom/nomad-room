import { Route, Routes } from "react-router-dom";
import { ValidationPage } from "../pages/validationUser/indedx";
import { Homepage } from "../components/Home";
import { RoomPage } from "../pages/room";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/validation" element={<ValidationPage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/room/:id" element={<RoomPage />} />
    </Routes>
  );
};
