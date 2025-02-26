import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  // const [multipliedvalue, setmultipliedvalue] = useState(1);

  let multipiedValue = value * 5;

  const multiplybyfive = () => {
    //  setmultipliedvalue(value * 5);
    setValue(value + 1);
  };

  return (
    <>
      <h1>Main Value: {value}</h1>
      <button onClick={multiplybyfive}>Click to mutiply by 5</button>
      <h2>Multiplied Value: {multipiedValue}</h2>
    </>
  );
}

export default App;
