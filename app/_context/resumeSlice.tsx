import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  role: "",
  about: "",
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
  reducers: {},
});

export default resumeSlice.reducer;
