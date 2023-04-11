import React, { useState } from "react";
import * as math from "mathjs";
import "./cal.css";
function Cal() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setResult(math.evaluate(result));
    } catch (error) {
      setResult("Error");
    }
  };

  const Keyboard = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    ".",
    "0",
    "=",
    "/",
  ];

  return (
    <div>
      <div className="cal">
        <div className="master">
          <div className="calculator">
            <div className="display">{result}</div>
            <div className="buttons">
              <button className="operator" onClick={handleClear}>
                Clear
              </button>
              <button className="operator" onClick={handleDelete}>
                Delete
              </button>
              <br />

              <div className="keyboard">
                {Keyboard.map((key) => {
                  if (key === "=")
                    return (
                      <button onClick={handleEqual} key={key} name={key}>
                        {key}
                      </button>
                    );
                  else
                    return (
                      <button onClick={handleClick} key={key} name={key}>
                        {key}
                      </button>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cal;
