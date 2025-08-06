import "./App.css";
import Die from "../components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useWindowSize } from 'react-use'
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(() => generatedAllNewDice());

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

    function rollDice() {
        if (!gameWon) {
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ?
                    die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            ))
        } else {
            setDice(generatedAllNewDice())
        }
    }


  function generatedAllNewDice() {
    const arr = [];

    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      arr.push({
        value: randomNumber,
        isHeld: false,
        id: nanoid(),
      });
    }
    return arr;
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      hold={() => hold(die.id)}
    />
  ));

  const { width, height } = useWindowSize();

  return (
    <main>
      {gameWon && <Confetti width={width} height={height} />}

      <div className="bg-noise"></div>
      <div className="container">
        <div className="outer-square">
          <div className="inner-square">
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
            <div className="dice-container">
              {diceElements}
              <button className="roll" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
