import axios from "axios";
import AuthenticationProviderEnum from "../../enum/authentication-provider";
import {FacebookUser, IUser }from "../../interfaces/user";

export async function verifyToken(accessToken: string, provider: string) {
  if (provider == AuthenticationProviderEnum.Facebook) {
    const userInfoRequest = await axios.get<FacebookUser>(
      `${process.env.REACT_APP_FACBOOK_BASE_URL}/me?fields=id,name,email,picture,first_name,last_name&access_token=${accessToken}`
    );
    if (!userInfoRequest) {
        console.log("loading")
    }
    const {id, name , first_name, email, last_name} = userInfoRequest.data
   let user: FacebookUser = {
    id: id,
    first_name: first_name,
    last_name: last_name,
    email: email,
    name:name
   }
    return user;
  }
  else if (provider == AuthenticationProviderEnum.Google) {
            // request with google token here
  }
}
