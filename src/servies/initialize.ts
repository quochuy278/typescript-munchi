import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { FacebookLogin } from "@capacitor-community/facebook-login";
import AuthenticationProviderEnum from "./authentication/enum/authentication-provider";

export async function Initialize(provider:string) {
  if ((provider == AuthenticationProviderEnum.Google)) {
    await GoogleAuth.initialize({
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      scopes: ["profile", "email"],
      grantOfflineAccess: true,
    });
  } else if ((provider == AuthenticationProviderEnum.Facebook)) {
    await FacebookLogin.initialize({
      appId: process.env.REACT_APP_FACEBOOK_APP_ID,
    });
  }
}
