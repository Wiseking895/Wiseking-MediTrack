import { createSlice } from "@reduxjs/toolkit";

const visitSlice = createSlice({
  name: "visits",
  initialState: { list: [] },
  reducers: {
    addVisit(state, action) {
      state.list.push(action.payload);
    },
  },
});

export const { addVisit } = visitSlice.actions;
export default visitSlice.reducer;
