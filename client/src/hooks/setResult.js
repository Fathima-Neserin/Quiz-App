import { pushResultAction } from "../redux/result.reducer";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};
