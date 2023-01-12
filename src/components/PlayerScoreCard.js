import ScoreButtons from "./ScoreButtons";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
} from "../features/scoreCounterSlice";
import { useState } from "react";
import AddUserForm from "./AddUserForm";
import Col from "react-bootstrap/Col";
import WarningAlert from "./ui/WarningAlert";

const PlayerScoreCard = (props) => {
  const score = useSelector((state) => state.counter.players[props.name].score);
  const gameScore = useSelector(
    (state) => state.counter.players[props.name].totalScore
  );
  const available_points = useSelector(
    (state) => state.counter.available_points
  );
  const rounds = useSelector(
    (state) => state.counter.players[props.name].rounds
  );
  const dispatch = useDispatch();

  const setScore = (value) => {
    if (value > available_points) {
      // Need to pass this to the root component
      <WarningAlert
        message="Can't assign more than 26 points"
        variant="warning"
      />;
      return;
    }
    if (value > 0) {
      dispatch(incrementByAmount({ value: value, player: props.name }));
    } else {
      // This is for preventing the score below zero
      if (score + value >= 0) {
        dispatch(decrementByAmount({ value: value, player: props.name }));
      }
    }
  };
  return (
    <Col>
      <h1>{props.name}</h1>
      <h4>{gameScore}</h4>
      <ScoreButtons score={score} setScore={setScore} />
      {rounds.map((round) => {
        return <p>{round}</p>;
      })}
    </Col>
  );
};

export default PlayerScoreCard;
