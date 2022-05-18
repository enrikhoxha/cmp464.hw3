import React, { useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const line1Keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const line2Keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const line3Keys = ["Z", "X", "C", "V", "B", "N", "M"];
  const { disabledLetters } = useContext(AppContext);

  console.log(disabledLetters);

  return (
    <div className="keyboard">
      <div className="line1Keys">
        {line1Keys.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="line2Keys">
        {line2Keys.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="line3Keys">
        <Key keyValue={"ENTER"} largeKey />
        {line3Keys.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)} />;
        })}
        <Key keyValue={"DELETE"} largeKey />
      </div>
    </div>
  );
}

export default Keyboard;
