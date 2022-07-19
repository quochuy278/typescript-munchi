import { createSlice } from "@reduxjs/toolkit";
import { GoogleReponseObject } from "../servies/authentication/providers/google";
import type { PayloadAction } from "@reduxjs/toolkit";


const responseSlice = createSlice({
  name: "response",
  initialState: [] as GoogleReponseObject[],
  reducers: {
    storeReponse(state, action: PayloadAction<GoogleReponseObject>) {
      state.push(action.payload);
    },
    clearStoreReponse(state) {
      state.splice(0, state.length);
    },
  },
});

export const responseActions = responseSlice.actions;

export default responseSlice;
