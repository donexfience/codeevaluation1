import React, { useEffect, useState } from "react";
import EffectHook from "./EffectHook";

const EffectCleanup = () => {
  const [isVisible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let count = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(count);
  });
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setVisible(false);
        }}
      >
        Click me
      </button>
      { isVisible && <EffectHook/>}
    </div>
  );
};

export default EffectCleanup;
