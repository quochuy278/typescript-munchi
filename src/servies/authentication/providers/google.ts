import IAuthenticationProvider from "../../../interfaces/authentication-provider"
import IUser from "../../../interfaces/user";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

let GoogleProvider: IAuthenticationProvider = {
    identifier: "google_provider",
    login: async () => {

        let loggedUser = await GoogleAuth.signIn();

        console.log(loggedUser);
      
        let user: IUser = {
            firstname: "Phong",
            lastname: "Ly",
            email: "abc@gmail.com"
        }

        return user;
    },
    logout: async () => {

    }
};

export default GoogleProvider;