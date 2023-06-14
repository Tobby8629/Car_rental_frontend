import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const store = configureStore({
 reducer: {
    Users: UserSlice
 }
})

export default store