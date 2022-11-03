import { createContext } from "react";
import { iAuthProvider } from "./types";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: iAuthProvider) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
