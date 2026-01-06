import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import patientReducer from "./slices/patientSlice";
import appointmentReducer from "./slices/appointmentSlice";
import visitReducer from "../features/visits/visitSlice";
import reportReducer from "../features/reports/reportSlice";
import auditLogReducer from "../features/auditLogs/auditLogSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    patients: patientReducer,
    appointments: appointmentReducer,
    visits: visitReducer,
    reports: reportReducer,
    auditLogs: auditLogReducer,
  },
});

export default store;
