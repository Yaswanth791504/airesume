const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyBLOKqGmt7wYkgw8_-aVpasIIhtXKgcGfE";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const AiChatModel = model.startChat({
  generationConfig,
  history: [],
});
