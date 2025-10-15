import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, push, onValue } from "firebase/database";
import { db } from "../firebase/config";
import { addNotification } from "./notificationSlice";


export const sendMessage = createAsyncThunk(
    "chat/sendMessage",
    async (message, { dispatch }) => {
        const messagesRef = ref(db, "messages");
        const newMessage = { text: message, timestamp: Date.now() };

        await push(messagesRef, newMessage);

        dispatch(addNotification({}));

        return newMessage;
    }
);


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
        status: "idle",
        error: null,
    },
    reducers: {
        setMessages(state, action) {
            state.messages = action.payload;
        },
        clearMessages(state) {
            state.messages = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state) => {
                state.status = "loading";
            })
            .addCase(sendMessage.fulfilled, (state) => {
                state.status = "succeeded";
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setMessages, clearMessages } = chatSlice.actions;


export const listenMessages = () => (dispatch) => {
    const messagesRef = ref(db, "messages");
    onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        const loadedMessages = data
            ? Object.values(data).sort((a, b) => a.timestamp - b.timestamp)
            : [];
        dispatch(setMessages(loadedMessages));
    });
};

export default chatSlice.reducer;
