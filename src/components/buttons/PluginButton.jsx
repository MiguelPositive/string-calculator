import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { store } from "../context/ContextApp";

import Button from "./Button";

const PluginButton = () => {
  const {
    setActiveComplement,
    activeComplement,
    group1,
    group2,
    createArrays,
    joinStrings,
    complement,
    setActiveJoin,
    setActiveIntersection,
    setActiveMembership,
  } = useContext(store);

  const handleClick = () => {
    setActiveJoin(null);
    setActiveIntersection(null);
    setActiveMembership(null);
    setActiveComplement(true);

    createArrays();
  };

  useEffect(() => {
    if (group1 && group2 && activeComplement) {
      joinStrings();
      complement();
    }
  }, [group1, group2, activeComplement]);

  return (
    <Button
      title={"COMPLEMENTO"}
      icon={"bi bi-circle-half"}
      onClick={handleClick}
    />
  );
};

export default PluginButton;
