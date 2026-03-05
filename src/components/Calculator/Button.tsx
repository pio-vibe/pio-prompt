import React from "react";

export const Button: React.FC<{ value:string; onClick:()=>void; className?:string; ariaLabel?:string }>=({value,onClick,className="",ariaLabel})=>{
  return (
    <button onClick={onClick} aria-label={ariaLabel||value} className={`flex items-center justify-center p-4 rounded-xl text-xl font-medium transition-all duration-200 ${className}`}>
      {value}
    </button>
  );
};
