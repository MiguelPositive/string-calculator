import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";

import Button from "./Button";

const BackButton = () => {
  const { setMenuAlphabets } = useContext(store);

  const handleClick = () => {
    setMenuAlphabets(null);
  };

  return (
    <Button
      title={"ATRÁS"}
      icon={"bi bi-box-arrow-in-left"}
      onClick={handleClick}
    />
  );
};

export default BackButton;
