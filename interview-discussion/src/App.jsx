import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  console.log("app rendered", Math.random());
  // const [value, setValue] = useState(1);
  // const [multipliedvalue, setmultipliedvalue] = useState(1);

  // let multipiedValue = value * 5;

  // const multiplybyfive = () => {
  //   //  setmultipliedvalue(value * 5);
  //   setValue(value + 1);
  // };

  const [value, setValue] = useState({
    value: 0,
  });
  const clickMe = () => {
    setValue({
      value: 0,
    });
  };
  return (
    <>
      <h1>Main Value: {value.value}</h1>
      <button onClick={clickMe}>Click to mutiply by 5</button>
      {/* <h2>Multiplied Value: {multipiedValue}</h2> */}
    </>
  );
}

export default App;
