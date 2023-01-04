import React, { forwardRef } from "react";

const childRef = (props, ref) => {
  return <input ref={ref} />;
};

export default forwardRef(childRef);
