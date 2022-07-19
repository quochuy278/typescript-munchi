import IAuthenticationProvider from "../../interfaces/authentication-provider";

import GoogleProvider from "./providers/google";
import AuthenticationProviderEnum from "../../enum/authentication-provider";
import FacebookProvider from "./providers/facebook";

const getProvider = (provider:string) => {
    switch (provider) {
      case AuthenticationProviderEnum.Google:
        return GoogleProvider;
      case AuthenticationProviderEnum.Facebook:
        return FacebookProvider;
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