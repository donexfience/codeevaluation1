import React, { useReducer } from "react";

const InitialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return InitialState;
    default:
      return state;
  }
};

const Ccounter = () => {
  const [count, dispatch] = useReducer(reducer, InitialState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch('Increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};

export default Ccounter;
