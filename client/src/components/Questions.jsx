import React, { useEffect, useState } from "react";
import { useFetchQuestion } from "../hooks/fetchQuestion";
import { useSelector } from "react-redux";

const Questions = () => {
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const [checked, setChecked] = useState(undefined);

  const trace = useSelector((state) => state.questions.trace);
  const questions = useSelector(
    (state) => state.questions.qstns[state.questions.trace]
  );

  const onSelectHandler = () => {
    console.log("On select clicked", checked);
  };

  useEffect(() => {
    console.log(trace);

    console.log(questions);
    // console.log(isLoading);
    // console.log(apiData);
    // console.log(serverError);
  }, []);

  if (isLoading) return <h3 className="text-light">Loading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError} || "Unknown Error"</h3>;
  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name={`q${i}-option`}
              onChange={onSelectHandler}
            />
            <label htmlFor={`q${i}-option`} className="text-primary">
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
