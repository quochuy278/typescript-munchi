import { SocialAuthenticationProvider } from "../interfaces/authentication-provider";
import{ FacebookUser, IUser} from "../interfaces/user";
import {
  clearResponse,
  clearUserInfo,
  storeResponse,
  storeUserInfo,
} from "../../helpers/actions";
import { Initialize } from "../../initialize";
import {
  FacebookLogin,
  FacebookLoginResponse,
} from "@capacitor-community/facebook-login";
import { verifyToken } from "../../api/apis-service";
import AuthenticationProviderEnum from "../enum/authentication-provider";


let FacebookProvider: SocialAuthenticationProvider = {
  identifier: "facebook_provider",
  login: async () => {
    Initialize("Facebook");
    let loggedUser: FacebookLoginResponse = await FacebookLogin.login({
      permissions: ["email"],
    });
    const accessToken = loggedUser!.accessToken!.token;
    storeResponse(loggedUser);
   const userInfo = await verifyToken(accessToken, AuthenticationProviderEnum.Facebook) as FacebookUser
    // const userProfile = await getProfile();
   
    // // console.log(userProfile);
    storeUserInfo(userInfo)
   
    return userInfo;
  },
  logout: async () => {},
};

export default FacebookProvider;
