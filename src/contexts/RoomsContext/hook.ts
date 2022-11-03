import { useContext } from "react";
import { RoomsContext } from ".";

export const useRoomsContext = () => {
  const context = useContext(RoomsContext);

  return context;
};
