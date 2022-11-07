import { createContext } from "react";
import { iAuthProvider, iRegisterTechProps } from "./types";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: iAuthProvider) => {
  const UserValidation = (data: iRegisterTechProps) => {
    console.log(data);
  };
  return (
    <AuthContext.Provider value={{ UserValidation }}>
      {children}
    </AuthContext.Provider>
  );
};
