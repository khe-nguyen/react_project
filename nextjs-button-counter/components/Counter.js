"use client";
import React, { useState } from "react";

export default function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, setCount] = useState(Number(initialCount));
  const [step, setStep] = useState(Number(initialStep));

  // Increase count by the step amount
  const handleIncrement = () => {
    setCount(c => c + step);
  };

  // Decrease count but do not go below zero
  const handleDecrement = () => {
    setCount(c => Math.max(0, c - step));
  };

  // Reset count back to initialCount (from props)
  const handleReset = () => {
    setCount(initialCount);
  };

  // Handle changes to step input (minimum value of 1)
  const handleStepChange = e => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value) && value >= 1) {
      setStep(Math.floor(value));
    } else {
      setStep(1);
    }
  };

  // Disable the decrement button if it would go below zero
  const willUnderflow = count - step < 0;

  return (
    <div>
      {/* The live region lets screen readers announce changes */}
      <div aria-live="polite" className="count-display">
        Count: {count}
      </div>

      <div className="counter-row">
        <button onClick={handleIncrement} aria-label={`Add ${step}`}>
          +{step}
        </button>

        <button
          onClick={handleDecrement}
          disabled={willUnderflow}
          className={willUnderflow ? "secondary" : ""}
          aria-label={`Subtract ${step}`}
        >
          -{step}
        </button>

        <button
          onClick={handleReset}
          className="secondary"
          aria-label="Reset count to initial value"
        >
          Reset
        </button>

        <label style={{ marginLeft: 8 }}>
          Step
          <input
            type="number"
            min="1"
            value={step}
            onChange={handleStepChange}
            aria-label="Step amount"
          />
        </label>
      </div>
    </div>
  );
}