import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "./_context/resumeSlice";
import resumeStepperSlice from "./_context/resumeStepperSlice";

const store = configureStore({
  reducer: {
    resume: resumeSlice,
    resumeStepper: resumeStepperSlice,
  },
});

export default store;
