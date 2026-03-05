export function calculate(currentInput: string, buttonValue: string, memory: number | null): { result: string; memory: number | null } {
  switch (buttonValue) {
    case 'C':
      return { result: '0', memory: 0 };
    case 'CE':
      return { result: '0', memory: memory };
    case 'M+':
      // Add current input to memory
      const addValue = parseFloat(currentInput);
      const newMemoryAdd = (memory === null ? 0 : memory) + addValue;
      return { result: '0', memory: newMemoryAdd };
    case 'M-':
      // Subtract current input from memory
      const subtractValue = parseFloat(currentInput);
      const newMemorySubtract = (memory === null ? 0 : memory) - subtractValue;
      return { result: '0', memory: newMemorySubtract };
    case 'MR':
      // Recall from memory
      return { result: memory?.toString() || '0', memory: memory };
    case 'MC':
      // Clear memory
      return { result: '0', memory: 0 };
    case '=':
      try {
        // Evaluate expression
        // Basic validation to prevent eval abuse (example)
        if (!/^[-+*/\d\.\s]+$/.test(currentInput)) {
            throw new Error('Invalid input');
        }
        const evalResult = eval(currentInput);
        return { result: evalResult.toString(), memory: memory };
      } catch (e) {
        return { result: 'Error', memory: memory };
      }
    default:
      // Append to current input
      // Clear '0' if it's the initial state
      const newInput = currentInput === '0' ? buttonValue : currentInput + buttonValue;
      return { result: newInput, memory: memory};
  }
}
