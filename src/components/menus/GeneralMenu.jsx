import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";

import AlphabetsButton from "../buttons/AlphabetsButton";
import StringsButton from "../buttons/StringsButton";
import IdiomsButton from "../buttons/IdiomsButton";
import CleanButton from "../buttons/CleanButton";
import ExitButton from "../buttons/ExitButton";

import MembershipButton from "../buttons/MembershipButton";
import JoinButton from "../buttons/JoinButton";
import IntersectionButton from "../buttons/IntersectionButton";
import PluginButton from "../buttons/PluginButton";
import BackButton from "../buttons/BackButton";

const OptionsMenu = () => {
  const { menuAlphabets } = useContext(store);

  useEffect(() => {
    if (menuAlphabets) {
      // alert("true");
    }
  }),
    [menuAlphabets];

  if (menuAlphabets) {
    return (
      <div className="flex flex-col gap-5 animate__animated animate__fadeIn">
        <MembershipButton />
        <JoinButton />
        <IntersectionButton />
        <PluginButton />
        <CleanButton />
        <BackButton />
      </div>
    );
  } else {
    return (
      <div>
        <div
          className={`flex flex-col gap-5 animate__animated animate__fadeIn`}
        >
          <AlphabetsButton />
          <StringsButton />
          <IdiomsButton />
          <CleanButton />
          <ExitButton />
        </div>
      </div>
    );
  }
};

export default OptionsMenu;
