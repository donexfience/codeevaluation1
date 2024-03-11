import React, { useEffect, useState } from "react";

const Mousedirection = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logmouseover = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("event triggerd");
    window.addEventListener("mouseover", logmouseover);
    return () => {
        console.log("cleanup")
        window.removeEventListener("mouseover", logmouseover)};
  }, [x,y]);

  return (
    <div>
      {" "}
      X axis {x} Y axis {y}
    </div>
  );
};

export default Mousedirection;
