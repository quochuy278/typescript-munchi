import IAuthenticationProvider from "../../interfaces/authentication-provider";
import { LoginHandler } from "../auth-services";
import GoogleProvider from "./providers/google";
import AuthenticationProviderEnum from "../../enum/authentication-provider";

const getProvider = (provider:string) => {
    switch (provider) {
        case AuthenticationProviderEnum.Google:
            return GoogleProvider;
        default:
            return null;
    }
}

let AuthenticationService = {
    login: async (provider: string) => {
        let providerInstance = getProvider(provider);

        if (!providerInstance) {
            return;
        }

        await providerInstance.login();
    }
}

export default AuthenticationService;