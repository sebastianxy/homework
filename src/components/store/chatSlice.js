import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, push, onValue } from "firebase/database";
import { db } from "../firebase/config";

// Thunk para enviar mensaje
export const sendMessage = createAsyncThunk(
    "chat/sendMessage",
    async (message) => {
        const messagesRef = ref(db, "messages");
        await push(messagesRef, { text: message, timestamp: Date.now() });
    }
);

// Slice
const chatSlice = createSlice({
    name: "chat",
    initialState: { messages: [] },
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        }
    }
});

export const { setMessages } = chatSlice.actions;

// Listener de mensajes (se puede usar en useEffect)
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
