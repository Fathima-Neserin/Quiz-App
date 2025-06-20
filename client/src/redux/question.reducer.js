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
        trace : state.trace + 1
      }
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace : state.trace - 1 
      }
    }
  },
});

export const { startQuizAction, moveNextAction, movePrevAction } = questionReducer.actions;
export default questionReducer.reducer;
