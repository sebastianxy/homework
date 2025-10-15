
import { createSlice } from "@reduxjs/toolkit";
import { ref, push, onValue, remove, query, orderByChild, limitToFirst } from "firebase/database";
import { db } from "../firebase/config";

const dmSlice = createSlice({
  name: "dmQueue",
  initialState: {
    queue: [],
  },
  reducers: {
    setQueue(state, action) {
      state.queue = action.payload;
    },
  },
});

export const { setQueue } = dmSlice.actions;

// escuchar cambios
export const listenQueue = () => (dispatch) => {
  const qRef = ref(db, "dmQueue");
  onValue(qRef, (snap) => {
    const data = snap.val();
    const loaded = data ? Object.entries(data).map(([key, value]) => ({ id: key, ...value })) : [];
    // orden FIFO
    loaded.sort((a, b) => a.timestamp - b.timestamp);
    dispatch(setQueue(loaded));
  });
};

// enqueue normal
export const addToQueue = (dm) => async () => {
  const qRef = ref(db, "dmQueue");
  await push(qRef, { ...dm, timestamp: Date.now() });
};

// dequeue que borra el primero en Firebase
export const dequeue = () => async (dispatch, getState) => {
  const { queue } = getState().dmQueue;
  if (queue.length > 0) {
    const last = queue[queue.length - 1];
    const itemRef = ref(db, `dmQueue/${last.id}`);
    await remove(itemRef);
  }
};

export default dmSlice.reducer;
