import React, { useRef } from "react";
import Childforward from "./Childforward";

const Forwardrefs = () => {
  const inputRef1 = useRef(null); 
  const inputRef2 = useRef(null); 

  const handleChildButtonClick = () => {
    inputRef1.current.focus(); 
  };

  const handleMainButtonClick = () => {
    inputRef2.current.focus();
  };

  return (
    <div>
      <Childforward ref={inputRef1} />
      <input type="text" ref={inputRef2} />
      <button onClick={handleChildButtonClick}>Focus Child Input</button>
      <button onClick={handleMainButtonClick}>Focus Main Input</button>
    </div>
  );
};

export default Forwardrefs;
