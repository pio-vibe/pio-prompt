import React from 'react';
import { Button } from './Button';

export const Keypad: React.FC<{onButtonClick:(v:string)=>void}> = ({onButtonClick})=>{
  const buttons:string[] = [
    'M+','M-','MR','MC','C','CE','/','*','-','+','7','8','9','4','5','6','1','2','3','0','.','='
  ];
  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map(btn => (
        <Button key={btn} value={btn} onClick={()=>onButtonClick(btn)} />
      ))}
    </div>
  );
};
