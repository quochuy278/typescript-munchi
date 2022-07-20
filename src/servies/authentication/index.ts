

import GoogleProvider from "./providers/google";
import AuthenticationProviderEnum from "../../enum/authentication-provider";
import FacebookProvider from "./providers/facebook";
import AppleProvider from "./providers/apple";

const getProvider = (provider:string) => {
    switch (provider) {
      case AuthenticationProviderEnum.Google:
        return GoogleProvider;
      case AuthenticationProviderEnum.Facebook:
        return FacebookProvider;
      case AuthenticationProviderEnum.Apple:
        return AppleProvider;
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