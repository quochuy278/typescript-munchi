import IUser from "./user";

export default interface IAuthenticationProvider {
    identifier: string;
    login: () => Promise<IUser>; // arrow function
    logout: () => Promise<void>;
}