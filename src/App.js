import { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

const App = () => {

  const[numb, setNumb] = useState("");

  const buttons = ["7","8","9","C","4","5","6", "x", "1", "2", "3", "/", "0", "+", "-", "="];

  const handleCLick = buttons.map((val) => {
    return val
  });
  
  return (
    <div className="App">
      <h1>{numb}</h1>
        <button></button>
    </div>
  );
};
export default App;
