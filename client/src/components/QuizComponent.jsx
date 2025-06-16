import React from "react";
import Questions from "./Questions";

const QuizComponent = () => {
  const onNextHandler = () => {
    console.log("Next button clicked");
  };

  const onPrevHandler = () => {
    console.log("Prev button clicked");
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
