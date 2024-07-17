import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentIndex: 0,
};

const resumeStepperSlice = createSlice({
  name: "resumeStepper",
  initialState,
  reducers: {
    increment(state) {
      state.currentIndex += 1;
    },
    decrement(state) {
      state.currentIndex -= 1;
    },
    reset(state) {
      state.currentIndex = 0;
    },
  },
});

export const { increment, decrement, reset } = resumeStepperSlice.actions;

export default resumeStepperSlice.reducer;
