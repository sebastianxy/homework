
import { createSlice } from "@reduxjs/toolkit";
import { ref, push, onValue } from "firebase/database";
import { db } from "../firebase/config";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    stack: [],
  },
  reducers: {
    setNotifications(state, action) {
      state.stack = action.payload;
    },
    pushNotification(state, action) {
      state.stack.unshift(action.payload);
    },
    popNotification(state) {
      state.stack.shift();
    },
  },
});

export const { setNotifications, pushNotification, popNotification } = notificationsSlice.actions;

export const listenNotifications = () => (dispatch) => {
  const refNot = ref(db, "notifications");
  onValue(refNot, (snap) => {
    const data = snap.val();

    const loaded = data
      ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
      : [];
    loaded.sort((a, b) => b.timestamp - a.timestamp);
    dispatch(setNotifications(loaded));

  });
};

export const addNotification = (note) => async () => {
  const notRef = ref(db, "notifications");
  await push(notRef, { ...note, timestamp: Date.now() });
};


export default notificationsSlice.reducer;
