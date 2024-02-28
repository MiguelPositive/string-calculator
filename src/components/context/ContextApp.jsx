import React from "react";

import { createContext } from "react";
import { useState } from "react";

export const store = createContext();

const ContextApp = ({ children }) => {
  const [inputValue1, setInputValue1] = useState(null);
  const [group1, setGroup1] = useState(null);

  const [inputValue2, setInputValue2] = useState(null);
  const [group2, setGroup2] = useState(null);

  const [textOutput, setTextOutput] = useState(null);

  const [menuAlphabets, setMenuAlphabets] = useState(null);

  //active buttons

  const [activeMembership, setActiveMembership] = useState(null);
  const [activeJoin, setActiveJoin] = useState(null);
  const [activeIntersection, setActiveIntersection] = useState(null);
  const [activeComplement, setActiveComplement] = useState(null);

  let newArray1;
  let newArray2;
  let message;

  const createArrays = () => {
    // console.log("create arrays");

    if (!inputValue1 && !inputValue2) {
      setGroup1(["λ"]);
      setGroup2(["λ"]);
    } else {
      setGroup1(inputValue1.split(""));
      setGroup2(inputValue2.split(""));
    }
  };

  const joinStrings = () => {
    newArray1 = group1.filter((g) => {
      if (g !== " ") {
        return g;
      }
    });

    newArray2 = group2.filter((g) => {
      if (g !== " ") {
        return g;
      }
    });

    // console.log(newArray1);
    // console.log(newArray2);
  };

  //functions alphabets

  const membership = () => {
    let counter = 0;
    let counter2 = 0;
    newArray1.map((g1) => {
      newArray2.map((g2) => {
        if (g1 == g2) {
          counter++;
        } else {
          counter2++;
        }
      });

      if (counter == newArray1.length) {
        message = "L1 ∈ L2";
      } else if (counter2 > 0) {
        message = "L1 ∉ L2";
      }
    });

    let counter3 = 0;
    let counter4 = 0;
    newArray2.map((g2) => {
      newArray1.map((g1) => {
        if (g2 == g1) {
          counter3++;
        } else {
          counter4++;
        }
      });

      if (counter3 == newArray2.length) {
        setTextOutput(`${message} Y L2 ∈ L1 `);
      } else if (counter4 > 0) {
        setTextOutput(`${message} Y L2 ∉ L2`);
      }
    });
  };

  const join = () => {
    let newArray = [...newArray1, ...newArray2];

    console.log(newArray);

    let cleanArray = [...new Set(newArray)];

    console.log(cleanArray);

    setTextOutput(`L1 U L2 = {${cleanArray}}`);
  };

  const getIntersection = (L1, L2) => {
    const map1 = new Map();
    const map2 = new Map();

    // Contar la cantidad de veces que aparece cada elemento en arr1
    L1.forEach((element) => {
      map1.set(element, (map1.get(element) || 0) + 1);
    });

    // Contar la cantidad de veces que aparece cada elemento en arr2
    L2.forEach((element) => {
      map2.set(element, (map2.get(element) || 0) + 1);
    });

    const intersection = [];

    // Construir la intersección teniendo en cuenta las cantidades
    map1.forEach((count, element) => {
      const minCount = Math.min(count, map2.get(element) || 0);
      for (let i = 0; i < minCount; i++) {
        intersection.push(element);
      }
    });

    return intersection;
  };

  const intersection = () => {
    let res = getIntersection(newArray1, newArray2);

    if (res == "") {
      setTextOutput(`L1 ∩ L2 = {λ}`);
    } else {
      setTextOutput(`L1 ∩ L2 = {${res}}`);
    }
  };

  const getComplement = (L1, L2) => {
    const ArrayL2 = new Set(L2);
    const complement = [];

    for (const element of L1) {
      if (!ArrayL2.has(element)) {
        complement.push(element);
      }
    }

    return complement;
  };

  const complement = () => {
    let res = getComplement(newArray1, newArray2);
    console.log(res);
    setTextOutput(`U = {${newArray1}} ; L2' = {${res}}`);
  };

  return (
    <store.Provider
      value={{
        inputValue1,
        setInputValue1,
        inputValue2,
        setInputValue2,
        group1,
        setGroup1,
        group2,
        setGroup2,
        menuAlphabets,
        setMenuAlphabets,
        createArrays,
        joinStrings,
        membership,
        textOutput,
        setTextOutput,
        activeMembership,
        setActiveMembership,
        join,
        activeJoin,
        setActiveJoin,
        intersection,
        activeIntersection,
        setActiveIntersection,
        complement,
        setActiveComplement,
        activeComplement,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default ContextApp;
