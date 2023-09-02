import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { allQuestions: [], selectedAnswers: {}, name: "" },
};
export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestions: (state, action) => {
      state.value.allQuestions = [...action.payload];
    },
    addSelectedAnswers: (state, action) => {
      state.value.selectedAnswers[action.payload.selectedQuestion] =
        action.payload.option;
    },
    addName: (state, action) => {
      state.value.name = action.payload;
    },
  },
});

export const { addQuestions, addSelectedAnswers, addName } =
  questionsSlice.actions;

export default questionsSlice.reducer;
