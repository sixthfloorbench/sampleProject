import { configureStore } from "@reduxjs/toolkit";

import userActions from "../UserActions";
import authReducer from "../Authentication"
const store = configureStore({
    reducer: {
        users: userActions,
        auth: authReducer
    },
});

export default store