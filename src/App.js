import { useState } from "react";
import "./App.css";
import AddingUsersForm from "./components/AddingUsersForm";
import AddUserForm from "./components/AddUserForm";
import HeartsTable from "./components/HeartsTable";
import { useSelector, useDispatch } from "react-redux";
import { addPlayers } from "./features/scoreCounterSlice";

function App() {
  // const [players, setPlayers] = useState(["Sarah", "Bowen", "Robyn", "Ben"]);
  let players = useSelector((state) => state.counter.players);
  const [startedGame, setStartedGame] = useState(false);
  const dispatch = useDispatch();
  const beginGameHandler = (playerObj) => {
    if (Object.keys(playerObj).length === 4) {
      dispatch(addPlayers({ playersObj: playerObj }));
      // players = Object.keys(players);

      setStartedGame(true);
    }
  };
  return (
    <div className="App">
      <h1>Hearts ScoreCard</h1>
      {!startedGame && <AddingUsersForm beginGame={beginGameHandler} />}
      {/* <AddUserForm />*/}
      {startedGame && <HeartsTable players={Object.keys(players)} />}
    </div>
  );
}

export default App;
