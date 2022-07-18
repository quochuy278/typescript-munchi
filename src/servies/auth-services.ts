import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { FacebookLogin } from "@capacitor-community/facebook-login";

export async function LoginHandler(providerInput: string) {
  let loggedUser = null;
  if (providerInput === "Google") {
    //login by google
    return (loggedUser = await GoogleAuth.signIn().then((res) =>
      console.log(res)
    ));
  } else if (providerInput === "Facebook") {
    //login by facebook
    return (loggedUser = await FacebookLogin.login({
      permissions: ["email"],
    }).then((res) => console.log(res)));
    return "Not implemented Facebook login yet";
  } else if (providerInput === "Apple") {
    //login by apple
    return "Not implemented Apple login yet";
  } else {
    //login by email
    return "Not implemented email login yet";
  }
}
