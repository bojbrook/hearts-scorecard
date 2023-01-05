import classes from "./ScoreButtons.module.css";

const ScoreButtons = (props) => {
  const onClickHandler = (event) => {
    const button_value = +event.currentTarget.getAttribute("data-value");
    props.setScore(button_value);
  };
  return (
    <>
      <div className={classes.ScoreButtons}>
        <button data-value={-1} onClick={onClickHandler}>
          -1
        </button>
        <button data-value={-5} onClick={onClickHandler}>
          -5
        </button>
        <button data-value={-13} onClick={onClickHandler}>
          -13
        </button>
        <p>{props.score}</p>
        <button data-value={1} onClick={onClickHandler}>
          +1
        </button>
        <button data-value={5} onClick={onClickHandler}>
          +5
        </button>
        <button data-value={13} onClick={onClickHandler}>
          +13
        </button>
      </div>
      <button className={classes.axy} onClick={onClickHandler}>
        Shooting the moon
      </button>
    </>
  );
};

export default ScoreButtons;
