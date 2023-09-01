import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { allQuestions: [], selectedAnswers: {} } };
export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestions: (state, action) => {
      state.value.allQuestions = [...action.payload];
    },
    addSelectedAnswers: (state, action) => {
      console.log(state, action);
      // state.value.selectedAnswers.payload.selectedQuestion = ;
      state.value.selectedAnswers[action.payload.selectedQuestion] =
        action.payload.option;
    },
  },
});

export const { addQuestions, addSelectedAnswers } = questionsSlice.actions;

export default questionsSlice.reducer;
