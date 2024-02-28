import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";
import { useEffect } from "react";

import Button from "./Button";

const IntersectionButton = () => {
  const {
    createArrays,
    joinStrings,
    intersection,
    group1,
    group2,
    setActiveMembership,
    activeIntersection,
    setActiveJoin,
    setActiveIntersection,
    setActiveComplement,
  } = useContext(store);

  const handleClick = () => {
    setActiveMembership(null);
    setActiveJoin(null);
    setActiveIntersection(true);
    setActiveComplement(null);
    createArrays();
  };

  useEffect(() => {
    if (group1 && group2 && activeIntersection) {
      joinStrings();
      intersection();
    }
  }, [group1, group2, activeIntersection]);

  return (
    <Button
      title={"INTERSECCIÓN"}
      icon={"bi bi-circle-square"}
      onClick={handleClick}
    />
  );
};

export default IntersectionButton;
