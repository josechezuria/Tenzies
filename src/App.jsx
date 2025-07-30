import "./App.css";
import Die from "../components/Die";
import { useState } from "react";


function App() {

  const [dice, setDice] = useState(generatedAllNewDice())


  function generatedAllNewDice() {
    const arr = [];

    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
       arr.push(randomNumber);
    }
    return arr;
  }

  console.log(generatedAllNewDice());

  const generateDice = dice.map(die => (
    <Die
      value={die}
    />
  ))

  return (
    <main>
      <div className="bg-noise"></div>
      <div className="container">
        <div className="outer-square">
          <div className="inner-square">
            <div className="dice-container">
                {generateDice}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
