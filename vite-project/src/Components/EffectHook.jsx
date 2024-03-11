import React, { useEffect, useState } from "react";

const EffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `count is ${count}`;
  });
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        {`${count}`} increased
      </button>
    </div>
  );
};

export default EffectHook;
