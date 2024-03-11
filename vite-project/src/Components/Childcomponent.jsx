import React from "react";

const Childcomponent = (props) => {
  const handleClick = () => {

    props.handleMessageFromChild("Hello from child");
  };

  return (
    <div>
      <button onClick={handleClick}>Send Message to Parent</button>
    </div>
  );
};

export default Childcomponent;
