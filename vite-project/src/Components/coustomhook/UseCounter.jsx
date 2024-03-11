import React, { useState } from "react";

const useCounter = () => {
  const [state, setState] = useState(0);

  const increment = () => {
    setState((prev) => prev + 1);
  };

  const decrement = () => {
    setState((prev) => prev - 1);
  };

  const reset = () => {
    setState(0);
  };

  return { count: state, increment, decrement, reset };
};

export default useCounter;
