import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };
export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestions: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const { addQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
