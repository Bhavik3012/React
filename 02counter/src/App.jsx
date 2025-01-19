import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  // let counter = 15;
  const addValue = () => {
    // counter = counter + 1;
    if (counter >= 20) {
      setCounter(" Your counter goes out of range");
    } else {
      setCounter((prevCounter) => prevCounter + 1); // prevCounter is just a variable
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const removevalue = () => {
    if (counter > 0 && counter <= 20) {
      setCounter(counter - 1);
    } else {
      setCounter(" Your counter goes out of bound");
    }
    console.log(counter);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removevalue}>remove value{counter}</button>

      <p>Footer {counter}</p>
    </>
  );
}

export default App;
