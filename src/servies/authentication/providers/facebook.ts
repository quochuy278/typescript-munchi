import SocialAuthenticationProvider from "../../../interfaces/authentication-provider";
import IUser from "../../../interfaces/user";
import {
  clearResponse,
  clearUserInfo,
  storeResponse,
  storeUserInfo,
} from "../../helpers/actions";
import { Initialize } from "../../initialize";
import { FacebookLogin } from "@capacitor-community/facebook-login";

export interface FacebookToken {
  token?: string | undefined;
}

export interface FacebookResponseObject {
  accessToken?: FacebookToken ;
}

export interface FacebookProfileObject {
  email?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  id?: string;
}

const getProfile = async () => {
  let result = null;
  return (result = await FacebookLogin.getProfile({
    fields: ["email", "first_name", "last_name, name"],
  }));
};
let FacebookProvider: SocialAuthenticationProvider = {
  identifier: "facebook_provider",
  login: async () => {
    Initialize("Facebook");
    let loggedUser = await FacebookLogin.login({ permissions: ["email"] });
    storeResponse(loggedUser);
    const userProfile = await getProfile();

    console.log(userProfile);
    //
    let user: IUser = {
      id: "134",
      firstname: "Huy Bui",
      lastname: "adc",
      email: "asdad",
      fullName: "HBN",
    };
    storeUserInfo(user);

    return user;
  },
  logout: async () => {},
};

export default FacebookProvider;
