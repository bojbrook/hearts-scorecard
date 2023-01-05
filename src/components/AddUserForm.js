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
        <input type="text" placeholder="Name" ref={playerRef} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddUserForm;
