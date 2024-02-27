import React from "react";

import Input from "../inputs/Input";
import Output from "../../outputs/Output";
import OptionsMenu from "../menus/OptionsMenu";

const Dashboard = () => {
  return (
    <div className="animate__animated animate__fadeIn min-w-[100vw] min-h-[100vh] flex justify-center items-center text-[calc(0.6rem+0.6em)]">
      <div className="w-[calc(8rem+8em)] min-h-[100vh] bg-[#292C31] shadow-sm shadow-black/80 transition-all duration-100 p-4 pt-6 flex flex-col  justify-start items-center 800px:w-[calc(11rem+11em)] 800px:p-8">
        <h1 className="text-center mb-4">CALCULADORA DE CARACTERES</h1>

        <div className="w-full flex flex-col gap-4">
          <Input />
          <Output />

          <OptionsMenu />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
