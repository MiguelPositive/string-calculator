import React from "react";

import { createContext } from "react";
import { useState } from "react";

export const store = createContext();

const ContextApp = ({ children }) => {
   

  const [inputValue, setInputValue] = useState(null);
  const [menuAlphabets, setMenuAlphabets] = useState(null);

  return (
    <store.Provider
      value={{ inputValue, setInputValue, menuAlphabets, setMenuAlphabets }}
    >
      {children}
    </store.Provider>
  );
};

export default ContextApp;
