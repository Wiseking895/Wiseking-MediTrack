import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "reports",
  initialState: {
    list: [],
    selected: null,
  },
  reducers: {
    addReport(state, action) {
      state.list.push(action.payload);
    },
    selectReport(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { addReport, selectReport } = reportSlice.actions;
export default reportSlice.reducer;
