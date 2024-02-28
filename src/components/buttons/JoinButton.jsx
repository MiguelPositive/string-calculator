import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";

import Button from "./Button";

const JoinButton = () => {
  const {
    createArrays,
    joinStrings,
    join,
    group1,
    group2,
    activeJoin,
    setActiveMembership,
    setActiveIntersection,
    setActiveJoin,
    setActiveComplement,
  } = useContext(store);

  const handleClick = () => {
    createArrays();

    setActiveMembership(null);
    setActiveIntersection(null);
    setActiveComplement(null);
    setActiveJoin(true);
  };

  useEffect(() => {
    if (group1 && group2 && activeJoin) {
      joinStrings();
      join();
    }
  }, [group1, group2, activeJoin]);
  return (
    <Button title={"UNIÓN"} icon={"bi bi-bandaid-fill"} onClick={handleClick} />
  );
};

export default JoinButton;
