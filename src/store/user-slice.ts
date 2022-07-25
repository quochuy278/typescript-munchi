import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {IUser} from "../servies/authentication/interfaces/user";


const userSlice = createSlice({
  name: "users",
  initialState: [] as IUser[],
  reducers: {
    storeUser(state, action: PayloadAction<IUser>) {
      state.push(action.payload);
    },
    clearStoreUser(state) {
       state.splice(0, state.length);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
