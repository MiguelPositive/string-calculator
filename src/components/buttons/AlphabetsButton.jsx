import React from "react";

import Button from "./Button";
import { useContext } from "react";
import { store } from "../context/ContextApp";

const AlphabetsButton = () => {
  const { menuAlphabets, setMenuAlphabets } = useContext(store);

  const onClick = () => {
    setMenuAlphabets(true);
  };

  return <Button title={"ALFABETOS"} icon="bi bi-chat-square-text-fill" />;
};

export default AlphabetsButton;
