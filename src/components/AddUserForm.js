import { useRef } from "react";

const AddUserForm = (props) => {
  const playerRef = useRef(null);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const player = playerRef.current.value;
    props.addUser(player);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>Player 1</label>
        <input placeholder="Player Name" ref={playerRef} />
        <input type="radio" id="player1" name="Dealer" value="true"></input>
      </form>
    </>
  );
};

export default AddUserForm;
