import React, { useState } from "react";
import useCounter from "./UseCounter";

const Doctitle = () => {
  const [count, setCount] = useState(0);
  const { increment, decrement, reset } = useCounter();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>clicked {count}</button>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Doctitle;
