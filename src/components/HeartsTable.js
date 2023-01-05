import PlayerScoreCard from "./PlayerScoreCard";
import classes from "./HeartsTable.module.css";
import { useSelector, useDispatch } from "react-redux";
import { finishRound } from "../features/scoreCounterSlice";
const HeartsTable = (props) => {
  const available_points = useSelector(
    (state) => state.counter.available_points
  );
  const dispatch = useDispatch();

  const finishRoundHandler = () => {
    if (available_points > 0) {
      alert("Available points is greater than 0");
      return;
    }
    dispatch(finishRound());
  };
  return (
    <>
      <h4>Available points {available_points}</h4>
      <div className={classes.scoretable}>
        {props.players.map((player) => {
          return <PlayerScoreCard key={player} name={player} />;
        })}
      </div>
      <button onClick={finishRoundHandler}>Finish Round</button>
    </>
  );
};

export default HeartsTable;
