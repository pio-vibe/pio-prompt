import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/Calculator/Button";
import { Keypad } from "@/components/Calculator/Keypad";
import { CalculatorDisplay } from "@/components/Calculator/Display";
import { calculate } from "@/utils/calculatorLogic";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pio-prompt Builder",
  description: "Build AI prompts with cards",
};

export default function BuilderPage() {
  const [input, setInput] = useState('0');
  const [memory, setMemory] = useState<number | null>(0);

  const handleButtonClick = (value: string) => {
    let newState;

    if (value === '=') {
      const result = calculate(input, value, memory);
      newState = { result: result.result, memory: result.memory };
    } else if ('M+' || 'M-' || 'MR' || 'MC'.includes(value)) {
      const result = calculate(input, value, memory);
      newState = { result: result.result, memory: result.memory };
    } else if (value === 'C') {
      newState = { result: '0', memory: memory };
    } else if (value === 'CE') {
      newState = { result: '0', memory: memory };
    } else {
      const newInput = input === '0' ? value : input + value;
      newState = { result: newInput, memory: memory };
    }
    
    setInput(newState.result);
    setMemory(newState.memory);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="bg-zinc-900/50 border-b border-zinc-800 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">🤖</div>
            <span className="text-lg font-bold">pio-prompt Builder</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-zinc-400 hover:text-white transition">← Back</a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-8">AI Prompt Builder</h1>
        <p className="text-center text-zinc-400 max-w-xl mx-auto mb-12">Select cards, configure parameters, and generate your perfect prompt!</p>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Selection */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-zinc-400">Prompt Cards</h2>
            <div className="grid grid-cols-2 gap-3">
              {promptCards.map(card => (
                <Button
                  key={card.id}
                  value={card.name}
                  onClick={() => handleButtonClick(card.id)} // Pass card id for action
                  ariaLabel={card.name}
                  className={
                    ` ${card.tier === 'free' ? 'border-zinc-700' : card.tier === 'starter' ? 'border-blue-500' : 'border-purple-500'} `
                  }
                />
              ))}
            </div>
          </div>

          {/* Generated Prompt */} 
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Your Prompt</h3>
            <CalculatorDisplay value={input} />
             <Keypad onButtonClick={handleButtonClick} />
          </div>
        </div>
      </main>
    </div>
  );
}
