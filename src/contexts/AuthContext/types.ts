import { ReactNode } from "react";

export interface iAuthProvider {
  children: ReactNode;
}

export interface iValidation {
  profile_photo: string;
  about: string;
  validation?: boolean;
}

export interface iAuthValues {
  UserValidation: (data: iValidation) => void;
}
