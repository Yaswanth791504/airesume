import { createSlice } from "@reduxjs/toolkit";
import exp from "constants";

const initialState = {
  name: "",
  role: "",
  about: "",
  themeColor: "#373d4c",
  experience: [],
  achievements: [],
  phone: "",
  email: "",
  address: "",
  education: [],
  expertise: [],
  languages: [],
  image: "",
  state: "",
  country: "",
  pinCode: "",
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateThemeColor(state, action) {
      state.themeColor = action.payload;
    },
  },
});

export const { updateThemeColor } = resumeSlice.actions;

export default resumeSlice.reducer;
