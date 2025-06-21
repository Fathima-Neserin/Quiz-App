import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { moveNextQuestion, movePrevQuestion } from "../hooks/fetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const QuizComponent = () => {
  const state = useSelector((state) => state.result.result);
  const result = useSelector((state) => state.result.result);
  const { qstns, trace } = useSelector((state) => state.questions);

  const [check, setCheck] = useState(undefined);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("state", state);
  }, [state]);

  const onNextHandler = () => {
    if (trace < qstns.length) {
      console.log("Next button clicked");
      dispatch(moveNextQuestion());
      dispatch(PushAnswer(check));
    }
  };

  const onPrevHandler = () => {
    if (trace > 0) {
      console.log("Prev button clicked");
      dispatch(movePrevQuestion());
    }
  };

  const onChecked = (check) => {
    console.log(check);
    setCheck(check);
  };

  if (result.length && result.length >= qstns.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <Questions onChecked={onChecked} />
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
