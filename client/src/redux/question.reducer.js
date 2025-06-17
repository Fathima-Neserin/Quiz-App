import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    qstns: [],
    answs: [],
    trace: 0,
  },
  reducers: {
    startQuizAction: (state, action) => {
      return {
        ...state,
        qstns: action.payload,
      };
    },
  },
});

export const { startQuizAction } = questionReducer.actions;
export default questionReducer.reducer;
