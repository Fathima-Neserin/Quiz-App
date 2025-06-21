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
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAllAction: () => {
      return {
        qstns: [],
        answs: [],
        trace: 0,
      };
    },
  },
});

export const {
  startQuizAction,
  moveNextAction,
  movePrevAction,
  resetAllAction,
} = questionReducer.actions;
export default questionReducer.reducer;
