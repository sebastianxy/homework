
import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import postsReducer from "./postSlice";
import notificationsReducer from "./notificationSlice";
import dmQueueReducer from "./dmColaSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        chat: chatReducer,
        posts: postsReducer,
        notifications: notificationsReducer,
        dmQueue: dmQueueReducer,
        auth: authReducer,
    },
});

export default store;
