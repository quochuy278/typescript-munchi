import SocialAuthenticationProvider from "../../../interfaces/authentication-provider";
import IUser from "../../../interfaces/user";
import { clearResponse, clearUserInfo, storeResponse, storeUserInfo } from "../../helpers/actions";
import { Initialize } from "../../initialize";
import { FacebookLogin } from "@capacitor-community/facebook-login";

export interface FacebookResponseObject {
  id: string;
}

let FacebookProvider: SocialAuthenticationProvider = {
  identifier: "facebook_provider",
  login: async () => {
    Initialize("Facebook");
    let loggedUser = await FacebookLogin.login({permissions:['email']});

    console.log(loggedUser);
    // storeResponse(loggedUser);
    let user: IUser = {
      id: "134",
      firstname: "Huy Bui",
      lastname: "adc",
      email: "abc@email.com",
      fullName: "HBN",
    };
    storeUserInfo(user);

    return user;
  },
  logout: async () => {
  },
};

export default FacebookProvider;
