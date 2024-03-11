import React, { useReducer } from "react";

const InitialState = {
  firstcounter: 0,
  secondcounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { firstcounter: state.firstcounter + 1 };
    case "decrement":
      return { firstcounter: state.firstcounter - 1 };
    case "Increment2":
      return { ...state, firstcounter: state.secondcounter + 1 };
    case "decrement2":
      return { ...state, secondcounter: state.secondcounter - 1 };
    case "reset":
      return InitialState;
    default:
      return state;
  }
};

const Counterobject = () => {
  const [count, dispatch] = useReducer(reducer, InitialState);
  const [counttwo, dispatchtwo] = useReducer(reducer, InitialState);

  return (
    <div>
      <h1>{count.firstcounter}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
        <h1>{count.secondcounter}</h1>
        <button onClick={() => dispatchtwo({ type: "Increment2" })}>
          Increment2
        </button>
        <button onClick={() => dispatchtwo({ type: "decrement2" })}>
          Decrement2
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default Counterobject;
