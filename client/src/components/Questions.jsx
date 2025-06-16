import React, { useEffect, useState } from "react";
import data from "../database/data";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  const question = data[0];

  const onSelectHandler = () => {
    console.log("On select clicked", checked);
  };

  useEffect(() => {
    console.log(question);
  }, []);
  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>

      <ul key={question.id}>
       {question.options.map((q,i) => (
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
