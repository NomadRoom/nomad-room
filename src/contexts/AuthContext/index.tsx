import { api } from "../../services/api";
import {
  createContext,
  useState,
 
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  iAuthProviderProps,
  iProviderContext,
  iUser,
  iUserLogin,
  iUserRequest,
} from "./types";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext({} as iProviderContext);

const AuthProvider = ({ children }: iAuthProviderProps) => {
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
  
      toast.success("Login Realizado")
    
     setTimeout(() => {
      const toNavigate = location.state?.from?.pathname || "dashboard";

      navigate(toNavigate, { replace: true });
    }, 3000);
      
    console.log(userResponse);

    } catch (error) {
      toast.error("Login não realizado")
      console.error(error);
    }
  };

  const registerUser = async (data: iUserRequest) => {
    try {
      const response = await api.post("/register", data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUserInfo(userResponse);
      window.localStorage.clear();
      localStorage.setItem("@NomadRoom:token", token);;
    
      toast.success("Cadastro Realizado")
    
     setTimeout(() => {
      const toNavigate = location.state?.from?.pathname || "dashboard";

      navigate(toNavigate, { replace: true });
    }, 3000);
    
    } catch (error) {
      toast.error("cadastro nao realizado")
      console.error(error);

    }
  };

  return (
    <AuthContext.Provider
      value={{ login, registerUser, setUserInfo, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
