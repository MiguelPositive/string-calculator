import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";

import Button from "./Button";

const CleanButton = () => {
  const { setTextOutput, setInputValue1, setInputValue2 } = useContext(store);

  const handleClick = () => {
    setTextOutput("");
    setInputValue1(null);
    setInputValue2(null);
  };

  return (
    <div className="relative">
      <Button
        title={"LIMPIAR"}
        icon={"bi bi-eraser-fill"}
        onClick={handleClick}
      />
      {/* <img
        src="./src/assets/imgs/clean.png"
        alt=""
        className="w-[1.3rem] h-[1.3rem] absolute right-3 top-2"
      /> */}
    </div>
  );
};

export default CleanButton;
