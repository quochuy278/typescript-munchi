import SocialAuthenticationProvider from "../../../interfaces/authentication-provider";
import IUser from "../../../interfaces/user";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

import { Initialize } from "../../initialize";
import { clearResponse, clearUserInfo, storeResponse, storeUserInfo } from "../../helpers/actions";

export interface AuthenticationGoogleToken {
  accessToken: string;
  idToken: string;
  refreshToken?: string | undefined;
}

export interface GoogleReponseObject {
  authentication?: AuthenticationGoogleToken;
  email?: string;
  familyName?: string;
  givenName?: string;
  id?: string;
  imageUrl?: string;
  name?: string;
  serverAuthCode?: string;
}



let GoogleProvider: SocialAuthenticationProvider = {
  identifier: "google_provider",
  login: async () => {
    Initialize("Google");
    let loggedUser = await GoogleAuth.signIn();

    console.log(loggedUser);
    storeResponse(loggedUser);
    let user: IUser = {
      id: loggedUser.id,
      firstname: loggedUser.familyName,
      lastname: loggedUser.givenName,
      email: loggedUser.email,
      fullName: loggedUser.name,
    };
    storeUserInfo(user);

    return user;
  },
  logout: async () => {
     let loggedUser = await GoogleAuth.signOut();
    clearResponse();
    clearUserInfo()
  },
};

export default GoogleProvider;
