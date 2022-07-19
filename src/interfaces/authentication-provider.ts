import IUser from "./user";

export default interface SocialAuthenticationProvider {
    identifier: string;
    login: () => Promise<IUser>; // arrow function
    logout: () => Promise<void>;
}