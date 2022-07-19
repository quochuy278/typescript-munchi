import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import responseSlice from "./response-slice";
import userSlice from "./user-slice";

const  store = configureStore({
    reducer: {auth: authSlice.reducer , users: userSlice.reducer, response: responseSlice.reducer}
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;