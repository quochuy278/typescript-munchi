import {IUser} from "../../interfaces/user";
import store from "../../store";
import { responseActions } from "../../store/response-slice";
import { userActions } from "../../store/user-slice";
import { GoogleReponseObject } from "../authentication/providers/google";
import { FacebookLoginResponse } from "@capacitor-community/facebook-login";

//limit dispatch only 1 element in the array
export function storeUserInfo(userInfo: IUser) {
  const userStored = store.dispatch(userActions.storeUser(userInfo));
  return userStored;
}
export function storeResponse(response: GoogleReponseObject | FacebookLoginResponse) {
  const resStored = store.dispatch(responseActions.storeReponse(response));
  return resStored;
}

export function clearUserInfo() {
  const userCleared = store.dispatch(userActions.clearStoreUser());
  return userCleared;
}
export function clearResponse() {
  const resCleared = store.dispatch(responseActions.clearStoreReponse());
  return resCleared;
}
