import { SocialAuthenticationProvider } from "../../../interfaces/authentication-provider";
import{ IUser} from "../../../interfaces/user";
import { storeResponse, storeUserInfo } from "../../helpers/actions";
import { Initialize } from "../../initialize";

 let AppleProvider: SocialAuthenticationProvider = {
  identifier: "apple_provider",
  login: async () => {
    // Initialize("Facebook");
    // let loggedUser = await FacebookLogin.login({ permissions: ["email"] });
    // storeResponse(loggedUser);
    // const userProfile = await getProfile();

    // console.log(userProfile);
    // //
    let user: IUser = {
      id: "134",
      firstname: "Huy Bui",
      lastname: "adc",
      email: "asdad",
      fullName: "HBN",
    };
    // storeUserInfo(user);

    return user;
  },
  logout: async () => {},
};

export default AppleProvider;
