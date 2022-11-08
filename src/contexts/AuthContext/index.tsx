import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { iAuthProvider, iAuthValues, iValidation } from "./types";

export const AuthContext = createContext<iAuthValues>({} as iAuthValues);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const navigate = useNavigate();
  const UserValidation = async (data: iValidation): Promise<void> => {
    const userId = localStorage.getItem("@NomadRoom:userId");
    const token = localStorage.getItem("@NomadRoom:token");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      data = { ...data, validation: true };
      await api.patch(`/users/${userId}`, data);
      navigate("/login");
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
