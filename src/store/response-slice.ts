import { createSlice } from "@reduxjs/toolkit";
import { GoogleReponseObject } from "../servies/authentication/providers/google";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FacebookLoginResponse } from "@capacitor-community/facebook-login";

type Response = GoogleReponseObject | FacebookLoginResponse;

const responseSlice = createSlice({
  name: "response",
  initialState: [] as Response[],
  reducers: {
    storeReponse(state, action: PayloadAction<Response>) {
      state.push(action.payload);
    },
    clearStoreReponse(state) {
      state.splice(0, state.length);
    },
  },
}); 

export const responseActions = responseSlice.actions;

export default responseSlice;
