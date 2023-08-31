import { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

const App = () => {

  const[numb, setNumb] = useState("");

  const buttons = ["7","8","9","C","4","5","6", "*", "1", "2", "3", "/", "0", "+", "-", "="];

  const handleClick = (string) => {
    if (string == "=") {
      setNumb(evaluate(numb))
    } else if (string == "C") {
      setNumb("")
    } else {
      setNumb(numb + string)
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className='display'>
          <h1>{numb}</h1>
        </div>
        <div className='buttonArray'>
          {buttons.map((button) => {
            return (
              <button className='sums' onClick={() => handleClick(button)}>{button}</button>
            )
          })
        }
        </div>
      </div>
    </div>
  );
};
export default App;
