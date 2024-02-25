import React from "react";

import { createContext } from "react";
import { useState } from "react";

const ContextApp = ({ children }) => {
  const store = createContext();

  const [inputValue, setInputValue] = useState(null);

  return (
    <store.Provider value={{ inputValue, setInputValue }}>
      {children}
    </store.Provider>
  );
};

export default ContextApp;
