import React from "react";

const Button = ({ title, icon, onClick }) => {
  return (
    <div
      className="w-full h-[calc(1.2rem+1.2em)] flex justify-between pl-3 pr-3 items-center rounded-md bg-[#3C4046] cursor-pointer shadow-sm shadow-black/30 transition-all duration-100 hover:shadow-black/80 hover:scale-105 hover:border-[2px] hover:border-[#2892F3]"
      onClick={onClick}
    >
      {title} <i className={icon}></i>
    </div>
  );
};

export default Button;
