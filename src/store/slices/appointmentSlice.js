import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],       // All appointments
  selected: null, // Selected appointment for detail view
};

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment(state, action) {
      state.list.push(action.payload);
    },
    setAppointments(state, action) {
      state.list = action.payload;
    },
    selectAppointment(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { addAppointment, setAppointments, selectAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
