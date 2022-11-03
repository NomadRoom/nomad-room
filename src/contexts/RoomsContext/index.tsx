import { createContext } from "react";
import { iRoomsProvider } from "./types";

export const RoomsContext = createContext({});

export const RoomsProvider = ({ children }: iRoomsProvider) => {
  return <RoomsContext.Provider value={{}}>{children}</RoomsContext.Provider>;
};
