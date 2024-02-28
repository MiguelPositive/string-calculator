import React from "react";

import Button from "./Button";
import { useContext } from "react";
import { store } from "../context/ContextApp";

const AlphabetsButton = () => {
  const { menuAlphabets, setMenuAlphabets, createArrays } = useContext(store);

  const onClick = () => {
    setMenuAlphabets(true);
    // createArrays();
  };

  return (
    <Button
      title={"ALFABETOS"}
      icon="bi bi-chat-square-text-fill"
      onClick={onClick}
    />
  );
};

export default AlphabetsButton;
