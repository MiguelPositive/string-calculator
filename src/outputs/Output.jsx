import React from "react";
import { useContext } from "react";
import { store } from "../components/context/ContextApp";

const Output = () => {
  const { textOutput } = useContext(store);

  return (
    <div className="w-full h-[calc(4rem+4em)] p-2 bg-[#3C4046] rounded-md shadow-sm shadow-black/60 overflow-y-auto custom-scroll alata">
      {textOutput && textOutput}
    </div>
  );
};

export default Output;
