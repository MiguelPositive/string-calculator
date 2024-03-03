import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";
import { useEffect } from "react";

import Input from "../inputs/Input";
import Output from "../../outputs/Output";
import OptionsMenu from "../menus/GeneralMenu";

const Dashboard = () => {
  const {
    setInputValue1,
    inputValue1,
    setInputValue2,
    inputValue2,
    group1,
    group2,
  } = useContext(store);

  const handleChangeGroup1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleChangeGroup2 = (e) => {
    setInputValue2(e.target.value);
  };

  // useEffect(() => {
  //   console.log(group1);
  //   console.log(group2);
  // }, [group1, group2]);

  return (
    <div className="animate__animated animate__fadeIn min-h-[100vh] flex justify-center items-center text-[calc(0.6rem+0.6em)] ">
      <div className="w-[calc(8rem+8em)] min-h-[100vh] bg-[#292C31] shadow-sm shadow-black/80 transition-all duration-100 p-4 pt-6 flex flex-col  justify-start items-center 800px:w-[calc(11rem+11em)] 800px:p-8">
        <h1 className="text-center mb-4">CALCULADORA DE CARÁCTERES</h1>

        <div className="w-full flex flex-col gap-4 ">
          <Input handleChange={handleChangeGroup1} value={inputValue1} />
          <Input handleChange={handleChangeGroup2} value={inputValue2} />
          <Output />
          <OptionsMenu />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
