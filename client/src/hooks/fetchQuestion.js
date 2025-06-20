import { useEffect, useState } from "react";
import data from "../database/data";
import { useDispatch } from "react-redux";
import {
  moveNextAction,
  movePrevAction,
  startQuizAction,
} from "../redux/question.reducer";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();

  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setGetData((prev) => ({ ...prev, isLoading: true }));

      try {
        let question = await data;

        if (question.length > 0) {
          setGetData((prev) => ({
            ...prev,
            isLoading: false,
            apiData: question,
          }));

          dispatch(startQuizAction(question));
        } else {
          throw new Error("No Question Available");
        }
      } catch (error) {
        setGetData((prev) => ({
          ...prev,
          isLoading: false,
          serverError: error,
        }));
      }
    };

    fetchData();
  }, [dispatch]);

  return [getData, setGetData];
};

export const moveNextQuestion = () => async (dispatch) => {
  try {
    await dispatch(moveNextAction());
  } catch (error) {
    console.log(error);
  }
};

export const movePrevQuestion = () => async (dispatch) => {
  try {
    await dispatch(movePrevAction());
  } catch (error) {
    console.log(error);
  }
};
