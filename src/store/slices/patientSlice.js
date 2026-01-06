import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],       // All patients
  selected: null, // Currently selected patient
};

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    addPatient(state, action) {
      state.list.push(action.payload);
    },
    setPatients(state, action) {
      state.list = action.payload;
    },
    selectPatient(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { addPatient, setPatients, selectPatient } = patientSlice.actions;
export default patientSlice.reducer;
