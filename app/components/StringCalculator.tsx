"use client";

import { calculateSumOfString } from "app/utils";
import { useRef, useState } from "react";

interface IResult {
  sum: number;
  negativeNumbers: number[];
}

const StringCalculator: React.FC = () => {
  const [result, setResult] = useState<IResult>({
    sum: 0,
    negativeNumbers: [],
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

  const updateSum = () => {
    if (inputRef.current) {
      setResult(
        calculateSumOfString(inputRef.current.value.replace(/\\n/g, "\n"))
      );
    }
  };

  return (
    <div className="min-w-[360px] p-5 border border-solid shadow-md rounded-md">
      <h4 className="text-xl mb-2">TDD Kata</h4>
      <h5 className="text-lg mb-8">String Calculator</h5>
      <div className="flex flex-col items-center">
        <input className="w-full mx-5 mb-2" type="text" ref={inputRef} />

        <button
          type="button"
          onClick={updateSum}
          className="primary-button mt-2 mb-8"
        >
          Calculate
        </button>
      </div>
      <div>
        {!!result.negativeNumbers.length && (
          <p>
            Negative Numbers :{" "}
            <span className="text-red-500">
              {result.negativeNumbers.join(", ")}
            </span>
          </p>
        )}
        <p>Result: {result.sum}</p>
      </div>
    </div>
  );
};

export default StringCalculator;
