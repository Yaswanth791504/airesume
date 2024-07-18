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
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateThemeColor(state, action) {
      state.themeColor = action.payload;
    },
    addEducation(state, action) {
      console.log(state.educations.toString());
      state.educations.push({
        id: action.payload.id,
        institute: "",
        degree: "",
        completionYear: 0,
      });
    },
    updateEducation(state, action) {
      console.log("from education slice");
      console.log(action.payload);
      const education = state.educations.find(
        (education) => education.id === action.payload.id
      );
      if (education) {
        education.institute = action.payload.institute;
        education.degree = action.payload.degree;
        education.completionYear = action.payload.completionYear;
      }
      console.log(state.educations);
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
    updatePersonalDetails(state, action) {
      const captialize = (word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1);
      state.name =
        captialize(action.payload.firstName) +
        " " +
        captialize(action.payload.lastName);
      state.role = action.payload.role
        .split(" ")
        .map((word: string) => captialize(word))
        .join(" ");
      state.about = action.payload.summary;
    },
    updateContactDetails(state, action) {
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.address = [
        action.payload.street,
        action.payload.city,
        action.payload.state,
        action.payload.pincode,
      ].join(", ");
      console.log(state.address);
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
  updatePersonalDetails,
  updateContactDetails,
} = resumeSlice.actions;

export default resumeSlice.reducer;
