import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [Numberallowed, setNumberallowed] = useState(false);
  const [Charallowed, setCharallowed] = useState(false);
  const [Password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy";
    if (Numberallowed) str += "0123456789";
    if (Charallowed) str += "!@#$%^*()-+=[]}{}`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, Numberallowed, Charallowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, Numberallowed, Charallowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-4 m-9 text-orange-600 bg-slate-800">
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
            ref={passwordRef}
          />
          <button
            id="copy"
            className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0"
            onClick={() => {
              copyPasswordToClipboard();
              const changecolor = document.getElementById("copy");
              changecolor.style.backgroundColor = "#00008B";
            }}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={5}
              max={50}
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
        <div className="m-1 text-center text-slate-500 pt-2">
          <button
            id="regenerate"
            onClick={() => {
              passwordGenerator();
            }}
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
