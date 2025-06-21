import React from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch } from "react-redux";
import { resetAllAction } from "../redux/question.reducer";
import { resetResultAction } from "../redux/result.reducer";

const ResultComponent = () => {
  const dispatch = useDispatch();

  const onRestartHandler = () => {
    console.log("On restart clicked");
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Nezrin</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points : </span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>Total Earn Points : </span>
          <span className="bold">30</span>
        </div>
        <div className="flex">
          <span>Quiz Result </span>
          <span className="bold">Passed</span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestartHandler}>
          Restart
        </Link>
      </div>
      <div className="container">
        <ResultTable />
      </div>
    </div>
  );
};

export default ResultComponent;
