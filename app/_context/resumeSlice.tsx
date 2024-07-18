import { createSlice } from "@reduxjs/toolkit";

interface Education {
  id: number;
  institute: string;
  degree: string;
  completionYear: number;
}

interface Experience {
  id: number;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Skill {
  id: number;
  skill: string;
}

interface Language {
  id: number;
  language: string;
}

interface Achievement {
  id: number;
  title: string;
}

const initialState = {
  name: "",
  role: "",
  about: "",
  themeColor: "#373d4c",
  experience: [] as Experience[],
  achievements: [] as Achievement[],
  phone: "",
  email: "",
  address: "",
  educations: [] as Education[],
  skills: [] as Skill[],
  languages: [] as Language[],
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
    addEducation(state, action) {
      state.educations.push({
        id: action.payload.id,
        institute: "",
        degree: "",
        completionYear: 0,
      });
    },
    updateEducation(state, action) {
      state.educations[action.payload.index] = action.payload.education;
    },
    removeEducation(state, action) {
      console.log(action.payload);
      state.educations = state.educations.filter(
        (education) => education.id !== action.payload
      );
    },
    addExperience(state, action) {
      state.experience.push({
        id: action.payload,
        companyName: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      });
    },
    updateExperience(state, action) {
      state.experience[action.payload.index] = action.payload.experience;
    },
    removeExperience(state, action) {
      state.experience = state.experience.filter(
        (experience) => experience.id !== action.payload
      );
    },
    addSkill(state, action) {
      state.skills.push({
        id: action.payload,
        skill: "",
      });
    },
    updateSkill(state, action) {
      state.skills[action.payload.index] = action.payload.skill;
    },
    removeSkill(state, action) {
      state.skills = state.skills.filter(
        (skills) => skills.id !== action.payload
      );
    },
    addLanguage(state, action) {
      state.languages.push({
        id: action.payload.id,
        language: action.payload.language,
      });
    },
    updateLanguage(state, action) {
      state.languages[action.payload.index] = action.payload.language;
    },
    removeLanguage(state, action) {
      state.languages = state.languages.filter(
        (language) => language !== action.payload
      );
    },
    addAcheivements(state, action) {
      state.achievements.push({
        id: action.payload.id,
        title: action.payload.title,
      });
    },
    updateAchievements(state, action) {
      state.achievements[action.payload.index] = action.payload.achievement;
    },
    removeAchievements(state, action) {
      state.achievements = state.achievements.filter(
        (achievement) => achievement !== action.payload
      );
    },
    updateFirstName(state, action) {
      state.name = action.payload;
    },
    updateLastName(state, action) {
      state.name = state.name + " " + action.payload;
    },
  },
});

export const {
  updateThemeColor,
  addEducation,
  updateEducation,
  removeEducation,
  addExperience,
  updateExperience,
  removeExperience,
  addSkill,
  updateSkill,
  removeSkill,
  addLanguage,
  updateLanguage,
  removeLanguage,
  addAcheivements,
  updateAchievements,
  removeAchievements,
  updateFirstName,
  updateLastName,
} = resumeSlice.actions;

export default resumeSlice.reducer;
