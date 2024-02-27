import React from "react";

import AlphabetsButton from "../buttons/AlphabetsButton";
import StringsButton from "../buttons/StringsButton";
import IdiomsButton from "../buttons/IdiomsButton";
import CleanButton from "../buttons/CleanButton";
import ExitButton from "../buttons/ExitButton";

const OptionsMenu = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <AlphabetsButton />
        <StringsButton />
        <IdiomsButton />
        <CleanButton />
        <ExitButton />
      </div>
    </div>
  );
};

export default OptionsMenu;
