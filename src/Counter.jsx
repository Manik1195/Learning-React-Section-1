import { useState } from "react";

export function Counter() {
  const [step, setstep] = useState(0);
  const [count, setCount] = useState(0);
  let date =new Date();
  let day=new Date().getDay();
  let year=new Date().getFullYear();
  function stepDecrement() {
    if (step > 0) setstep((s) => s - 1);
  }
  function stepIncrement() {
    setstep((s) => s + 1);
  }
  function countIncrement() {
    setCount((s) => s + step);
  }
  function countDecrement() {
    setCount((prev) => Math.max(0, prev - step));
  }


  return (
    <>
      <div
        className="date-card"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="step">
          <button onClick={stepDecrement}>-</button>
          <span>Step:{step}</span>
          <button onClick={stepIncrement}>+</button>
        </div>
        <div className="count">
          <button onClick={countDecrement}>-</button>
          <span>count:{count}</span>
          <button onClick={countIncrement}>+</button>
          <p>{date}</p>
        </div>
      </div>
    </>
  );
}
