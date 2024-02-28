import React, { useContext } from "react";
import { store } from "../context/ContextApp";

import Button from "./Button";

const ExitButton = () => {
  const { setMenuAlphabets } = useContext(store);

  const handleClick = () => {
    setMenuAlphabets(null);
  };

  return (
    <div className="relative">
      <Button
        title={"SALIR"}
        icon={"bi bi-box-arrow-right"}
        onClick={handleClick}
      />
      {/* <img
        src="./src/assets/imgs/exit.png"
        alt=""
        className="w-[1.3rem] h-[1.3rem] absolute right-3 top-2"
      /> */}
    </div>
  );
};

export default ExitButton;
