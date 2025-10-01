import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stack: [],
};

export const stackSlice = createSlice({
  name: "stack",
  initialState,
  reducers: {
    push: (state, action) => {
      state.stack.push(action.payload);
    },
    pop: (state) => {
      state.stack.pop();
    },
  },
});

export const { push, pop } = stackSlice.actions;
export default stackSlice.reducer;
