import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { iAuthProvider, iAuthValues, iValidation } from "./types";

export const AuthContext = createContext<iAuthValues>({} as iAuthValues);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const navigate = useNavigate();
  const UserValidation = async (data: iValidation): Promise<void> => {
    try {
      data = { ...data, validation: true };
      // await api.patch(`/users/${userId}`, data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ UserValidation }}>
      {children}
    </AuthContext.Provider>
  );
};
