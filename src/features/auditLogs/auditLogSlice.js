import { createSlice } from "@reduxjs/toolkit";

const auditLogSlice = createSlice({
  name: "auditLogs",
  initialState: { list: [] },
  reducers: {
    addAuditLog(state, action) {
      state.list.push(action.payload);
    },
  },
});

export const { addAuditLog } = auditLogSlice.actions;
export default auditLogSlice.reducer;
