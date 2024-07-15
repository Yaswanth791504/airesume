import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "../_context/resumeSlice";

const store = configureStore({
  reducer: {
    resume: resumeSlice,
  },
});

export default store;
