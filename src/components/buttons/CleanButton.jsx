import React from "react";

import Button from "./Button";

const CleanButton = () => {
  return (
    <div className="relative">
      <Button title={"Limpiar"} icon={"bi bi-eraser-fill"} />
      {/* <img
        src="./src/assets/imgs/clean.png"
        alt=""
        className="w-[1.3rem] h-[1.3rem] absolute right-3 top-2"
      /> */}
    </div>
  );
};

export default CleanButton;
