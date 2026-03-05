import React from 'react';
export const CalculatorDisplay: React.FC<{value:string}> = ({value})=> (
  <div className="col-span-4 bg-zinc-800 text-white text-4xl font-light p-6 rounded-lg text-right h-24 border border-zinc-700">{value||'0'}</div>
);
