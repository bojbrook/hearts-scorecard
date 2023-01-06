import ScoreButtons from "./ScoreButtons";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
} from "../features/scoreCounterSlice";
import { useState } from "react";
import AddUserForm from "./AddUserForm";

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
      alert("Can't assign more than 26 points");
      return;
    }
    if (value > 0) {
      dispatch(incrementByAmount({ value: value, player: props.name }));
    } else {
      dispatch(decrementByAmount({ value: value, player: props.name }));
    }
  };
  return (
    <div>
      <h1>{props.name}</h1>
      <ScoreButtons score={score} setScore={setScore} />
      {rounds.map((round) => {
        return <p>{round}</p>;
      })}
    </div>
  );
};

export default PlayerScoreCard;
