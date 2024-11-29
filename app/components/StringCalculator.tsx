"use client";

import { useRef, useState } from "react";

interface IResult {
  sum: number;
}

const StringCalculator: React.FC = () => {
  const [result, setResult] = useState<IResult>({
    sum: 0,
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

  const calculateSumOfString = () => {
    if (inputRef.current) {
      const numbers = inputRef.current.value
        .split(",")
        .map((num) => parseInt(num, 10))
        .filter((num) => !isNaN(num));
      const sum = numbers.reduce((acc, val) => acc + val, 0);

      setResult({ sum });
    }
  };

  return (
    <div>
      <h4>TDD Kata</h4>
      <h5>String Calculator</h5>
      <div className="flex flex-col items-end">
        <input type="text" ref={inputRef} />

        <button
          type="button"
          onClick={calculateSumOfString}
          className="primary-button mt-2 mb-4"
        >
          Calculate
        </button>
      </div>
      <div>
        <p>Result: {result.sum}</p>
      </div>
    </div>
  );
};

export default StringCalculator;
