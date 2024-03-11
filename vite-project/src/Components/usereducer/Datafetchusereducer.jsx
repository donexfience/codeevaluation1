import axios from "axios";
import React, { useEffect, useReducer } from "react";

const Datafetchusereducer = () => {
  const initialState = {
    Loading: "",
    Post: {},
    Error: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "Fetch":
        return { Loading: false, Error: "", Post: action.payload };
      case "Fail":
        return { Loading: true, Error: "something went wrong", Post: {} };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => dispatch({ type: "Fetch", payload: res.data }))
      .catch((e) => dispatch({ type: "Fail" }));
  });

  return (
    <div>
      <h1>{state.Loading ? "Loading" : state.Post.title}</h1>
      <h2>{state.Error ? state.Error : null}</h2>
    </div>
  );
};

export default Datafetchusereducer;
