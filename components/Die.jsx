function Die(props) {

  return (
    <>
      <button className={props.isHeld ? "active-button" : "die"} onClick={props.hold}>
        {props.value}
      </button>
    </>
  );
}

export default Die;
