import { useState } from "react";

function Die(props) {
  const [isActive, setIsActive] = useState(props.isHeld);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button className={isActive ? "active-button" : "die"} onClick={toggleActive}>
        {props.value}
      </button>
    </>
  );
}

export default Die;
