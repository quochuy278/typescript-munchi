import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { FacebookLogin } from "@capacitor-community/facebook-login";

export async function Initialize() {
  await GoogleAuth.initialize({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    scopes: ["profile", "email"],
    grantOfflineAccess: true,
  });

  await FacebookLogin.initialize({
    appId: process.env.REACT_APP_FACEBOOK_APP_ID,
  });
}
