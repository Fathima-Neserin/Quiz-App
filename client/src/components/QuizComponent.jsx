import { useEffect } from "react";
import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { moveNextQuestion, movePrevQuestion } from "../hooks/fetchQuestion";

const QuizComponent = () => {
  const { qstns, trace } = useSelector((state) => state.questions);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // if (qstns?.length) {
  //   //   console.log("Questions loaded:", qstns);
  //   // } else {
  //   //   console.log("No questions yet");
  //   // }
  //   // console.log(state);
  // });

  const onNextHandler = () => {
    if (trace < qstns.length) {
      console.log("Next button clicked");
      dispatch(moveNextQuestion());
    }
  };

  const onPrevHandler = () => {
    if (trace > 0) {
      console.log("Prev button clicked");
      dispatch(movePrevQuestion());
    }
  };
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <Questions />
      <div className="grid">
        <button className="btn prev" onClick={onPrevHandler}>
          Prev
        </button>
        <button className="btn next" onClick={onNextHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;
