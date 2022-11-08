import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  iAuthProvider,
  iAuthValues,
  iUser,
  iUseRegister,
  iUserLogin,
  iValidation,
} from "./types";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext<iAuthValues>({} as iAuthValues);

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState<iUser>({} as iUser);

  const login = async (data: iUserLogin) => {
    try {
      const response = await api.post("/login", data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUserInfo(userResponse);
      window.localStorage.clear();
      localStorage.setItem("@NomadRoom:token", token);
      localStorage.setItem("@NomadRoom:userId", data.id);

      toast.success("Login Realizado");

      setTimeout(() => {
        const toNavigate = location.state?.from?.pathname || "validation";

        navigate(toNavigate, { replace: true });
      }, 2000);

      console.log(userResponse);
    } catch (error) {
      toast.error("Login não realizado");
      console.error(error);
    }
  };

  const registerUser = async (data: iUseRegister) => {
    try {
      const response = await api.post("/register", data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUserInfo(userResponse);
      window.localStorage.clear();
      localStorage.setItem("@NomadRoom:token", token);
      localStorage.setItem("@NomadRoom:userId", data.id);
      toast.success("Cadastro Realizado");
      console.log(userResponse);
      setTimeout(() => {
        const toNavigate = location.state?.from?.pathname || "validation";

        navigate(toNavigate, { replace: true });
      }, 2000);
    } catch (error) {
      toast.error("cadastro nao realizado");
      console.error(error);
    }
  };

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
    <AuthContext.Provider
      value={{ UserValidation, login, registerUser, setUserInfo, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
