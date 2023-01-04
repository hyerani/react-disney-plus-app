import React from "react";
import { useState, useRef, useEffect } from "react";

const Ref = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [value, setValue] = useState("");
  const renderCountRef = useRef(0);
  let countVariable = 0;

  // 종속성 배열이 없으면 어떤 state든 변경되면 useEffect가 실행
  useEffect(() => {
    renderCountRef.current++;
  });

  // Ref를 사용하는 이유
  // 1. 화면이 랜더링 되는 수를 기억함
  const increaseRef = () => {
    countRef.current++; //값은 변하지만 화면을 재 랜더링 하지 않기 때문에 바로 보이지 않음
    // countRef.current = countRef.current + 1;
  };
  const increaseState = () => {
    setCount((prev) => prev + 1); // usestate는 화면이 재 랜더링 되면서 화면에 바로 보임
  };

  const increaseVariable = () => {
    countVariable++; //화면이 재 랜더링 된다 하더라도 값이 보이지 않음, 화면이 재 랜더링 되면 값이 초기화됨
  };

  return (
    <div>
      <p> Ref {countRef.current}</p>
      <p> State {count}</p>
      <p>Variable {countVariable}</p>
      <p>I rendered{renderCountRef.current} times</p>

      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>
        <button onClick={increaseRef}>Ref +</button>
        <button onClick={increaseState}>State +</button>
        <button onClick={increaseVariable}>Variable + </button>
      </div>
    </div>
  );
};

export default Ref;
