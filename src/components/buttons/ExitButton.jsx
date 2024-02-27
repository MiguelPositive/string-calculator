import React from "react";

import Button from "./Button";

const ExitButton = () => {
  return (
    <div className="relative">
      <Button title={"SALIR"} icon={"bi bi-box-arrow-right"}/>
      {/* <img
        src="./src/assets/imgs/exit.png"
        alt=""
        className="w-[1.3rem] h-[1.3rem] absolute right-3 top-2"
      /> */}
    </div>
  );
};

export default ExitButton;
