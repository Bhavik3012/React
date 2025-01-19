import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/icard";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Bhavik",
    age: "19",
  };
  let newArray = [1, 2, 3, 4];
  return (
    <>
      <h1 className="text-center bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="SBJOP" price="100" />
      <Card username="Bhavik" price="1000" />
    </>
  );
}

export default App;
