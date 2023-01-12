import { useRef } from "react";
import classes from "./AddingUsersForm.module.css";

const AddingUsersForm = (props) => {
  const player1 = useRef(null);
  const player2 = useRef(null);
  const player3 = useRef(null);
  const player4 = useRef(null);
  const player1RadioRef = useRef(null);
  const player2RadioRef = useRef(null);
  const player3RadioRef = useRef(null);
  const player4RadioRef = useRef(null);

  const startGameFormHandler = (event) => {
    event.preventDefault();
    let playersObj = {};
    playersObj[player1.current.value] = {
      score: 0,
      rounds: [],
      isDealer: player1RadioRef.current.checked,
      totalScore: 0,
    };
    playersObj[player2.current.value] = {
      score: 0,
      rounds: [],
      isDealer: player2RadioRef.current.checked,
      totalScore: 0,
    };
    playersObj[player3.current.value] = {
      score: 0,
      rounds: [],
      isDealer: player3RadioRef.current.checked,
      totalScore: 0,
    };
    playersObj[player4.current.value] = {
      score: 0,
      rounds: [],
      isDealer: player4RadioRef.current.checked,
      totalScore: 0,
    };

    // add the names to the redux store
    props.beginGame(playersObj);
  };
  return (
    <div className={classes.playerInputForm}>
      {/* Player 4 */}
      <form onSubmit={startGameFormHandler}>
        <label>Player 1</label>
        <input
          className={classes.playerNameInput}
          placeholder="Player Name"
          ref={player1}
          required
        />

        <input
          type="radio"
          id="player1"
          name="Dealer"
          value="1"
          ref={player1RadioRef}
          defaultChecked
        />
        <label htmlFor="Dealer">Dealer</label>
        <br />
        {/* Player 2 */}
        <label>Player 2</label>
        <input
          className={classes.playerNameInput}
          placeholder="Player Name"
          ref={player2}
          required
        />
        <input
          type="radio"
          id="player1"
          name="Dealer"
          value="2"
          ref={player2RadioRef}
        />
        <label htmlFor="Dealer">Dealer</label>
        <br />
        {/* Player 3 */}
        <label>Player 3</label>
        <input
          className={classes.playerNameInput}
          placeholder="Player Name"
          ref={player3}
          required
        />
        <input
          type="radio"
          id="player1"
          name="Dealer"
          value="3"
          ref={player3RadioRef}
        />
        <label htmlFor="Dealer">Dealer</label>
        <br />
        {/* Player 4 */}
        <label>Player 4</label>
        <input
          className={classes.playerNameInput}
          placeholder="Player Name"
          ref={player4}
          required
        />
        <input
          type="radio"
          id="player1"
          name="Dealer"
          value="4"
          ref={player4RadioRef}
        />
        <label htmlFor="Dealer">Dealer</label>
        <br />
        <input type="submit" value="Begin Game" />
      </form>
    </div>
  );
};

export default AddingUsersForm;
