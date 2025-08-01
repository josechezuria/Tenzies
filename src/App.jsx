import "./App.css";
import Die from "../components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(generatedAllNewDice());

  function rollDice() {
    setDice(generatedAllNewDice());
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
    setDice(prevDice => prevDice.map(die =>{
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      hold={() => hold(die.id)}
    />
  ));

  return (
    <main>
      <div className="bg-noise"></div>
      <div className="container">
        <div className="outer-square">
          <div className="inner-square">
            <div className="dice-container">
              {diceElements}
              <button className="roll" onClick={rollDice}>
                Roll
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
