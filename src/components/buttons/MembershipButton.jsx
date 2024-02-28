import React, { useEffect } from "react";
import { store } from "../context/ContextApp";
import { useContext } from "react";

import Button from "./Button";

const MembershipButton = () => {
  const {
    joinStrings,
    membership,
    createArrays,
    group1,
    group2,
    setActiveMembership,
    activeMembership,
    setActiveJoin,
    setActiveIntersection,
    setActiveComplement,
  } = useContext(store);

  const handleClikc = () => {
    setActiveJoin(null);
    setActiveIntersection(null);
    setActiveComplement(null);
    setActiveMembership(true);
    createArrays();
  };

  useEffect(() => {
    if (group1 && group2 && activeMembership) {
      joinStrings();
      membership();
    }
  }, [group1, group2, activeMembership]);

  return (
    <Button title={"PERTENENCIA"} icon={"bi bi-alexa"} onClick={handleClikc} />
  );
};

export default MembershipButton;
