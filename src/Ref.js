import React, { useRef } from "react";
import childRef from "./childRef";

// ref 를 이용해서 input을 클릭하지 않고도 focus를 줄 수 있음

const Ref = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* ref는 ref 이름 그대로 못내려 줌 그래서 forwardRef로 자식 컴포넌트를 감싸주어야 함 */}
      <childRef ref={inputRef} />
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export default Ref;
