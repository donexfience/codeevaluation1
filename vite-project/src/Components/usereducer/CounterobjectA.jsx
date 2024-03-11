import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counterOne: state.counterOne + 1 };
    case "decrement":
      return { ...state, counterOne: state.counterOne - 1 };
    case "increment2":
      return { ...state, counterTwo: state.counterTwo + 1 };
    case "decrement2":
      return { ...state, counterTwo: state.counterTwo - 1 };
    case "reset":
      return { ...action.initialState };
    default:
      return state;
  }
};

const CounterobjectA = () => {
  const initialState = {
    counterOne: 0,
    counterTwo: 1,
  };
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{count.counterOne}</p>
      <p>{count.counterTwo}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "increment2" })}>
        increment2
      </button>
      <button onClick={() => dispatch({ type: "decrement2" })}>
        decrement2
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset", initialState })}>
        reset
      </button>
    </div>
  );
};

export default CounterobjectA;
