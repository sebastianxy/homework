
import { createSlice } from "@reduxjs/toolkit";
import { ref, push, onValue } from "firebase/database";
import { db } from "../firebase/config";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        addLocalPost(state, action) {
            state.posts.unshift(action.payload);
        },
    },
});

export const { setPosts, addLocalPost } = postsSlice.actions;


export const listenPosts = () => (dispatch) => {
    const postsRef = ref(db, "posts");
    onValue(postsRef, (snap) => {
        const data = snap.val();
        const loaded = data ? Object.values(data).sort((a, b) => b.timestamp - a.timestamp) : [];
        dispatch(setPosts(loaded));
    });
};

export const createPost = (text) => async (dispatch) => {
    const postsRef = ref(db, "posts");
    await push(postsRef, { text, timestamp: Date.now() });

};

export default postsSlice.reducer;
