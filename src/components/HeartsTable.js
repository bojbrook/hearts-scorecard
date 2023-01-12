import PlayerScoreCard from "./PlayerScoreCard";
import classes from "./HeartsTable.module.css";
import { useSelector, useDispatch } from "react-redux";
import { finishRound } from "../features/scoreCounterSlice";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const HeartsTable = (props) => {
  const available_points = useSelector(
    (state) => state.counter.available_points
  );
  const dispatch = useDispatch();
  console.log(props.players);
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
      <Container>
        <Row>
          {props.players.map((player) => {
            return <PlayerScoreCard key={player} name={player} />;
          })}
        </Row>
      </Container>
      <button onClick={finishRoundHandler}>Finish Round</button>
    </>
  );
};

export default HeartsTable;
