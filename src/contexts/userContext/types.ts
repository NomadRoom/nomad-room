import { ReactNode, SetStateAction, Dispatch } from "react";

export interface iUser {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  age: string;
  genre: string;
  profession: string;
  token: string;
}
export interface iUserLogin {
  email: string;
  password: string;
  id: string;
}
export interface iAuthProviderProps {
  children: ReactNode;
}

export interface iUseRegister {
  name: string;
  last_name: string;
  email: string;
  password: string;
  age: string;
  profession: string;
  genre: string;
  id: string;
}

export interface iProviderContext {
  userInfo: iUser;
  setUserInfo: Dispatch<SetStateAction<iUser>>;
  login: (user: iUserLogin) => void;
  registerUser: (data: iUseRegister) => void;
}
