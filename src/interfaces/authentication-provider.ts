import {IUser} from "./user";

export interface SocialAuthenticationProvider {
  identifier: string;
  login: () => Promise<IUser>; // arrow function
  logout: () => Promise<void>;
}

export interface EmailAuthenticationProvider {
  identifer: string;
  emaillogin: (email: string, password: string) => Promise<void>;
}
