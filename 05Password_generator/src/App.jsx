import { useState } from "react";
import { useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [Numberallowed, setNumberallowed] = useState(false);
  const [Charallowed, setCharallowed] = useState(false);
  const [Password, setPassword] = useState();

  const passworedGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy";
    if (Numberallowed) str += "0123456789";
    if (Charallowed) str += "!@#$%^*()-+=[]}{}`~";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, Numberallowed, Charallowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-4 m-9 text-orange-300 bg-slate-800">
        <h1 className="text-3xl text-center text-white mb-4 font-bold p-1">
          Password Generator
        </h1>
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none- w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={5}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={Numberallowed}
              id="numberinput"
              onChange={(e) => {
                setNumberallowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={Charallowed}
              id="numberinput"
              onChange={(e) => {
                setCharallowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
