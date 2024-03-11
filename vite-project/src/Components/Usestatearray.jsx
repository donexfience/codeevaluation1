import React, { useState } from "react";

function Usestatearray() {
  const [array, setArray] = useState([]);

  const addItem = () => {
    const newItem = { id: array.length, value: Math.floor(Math.random() * 10) + 1 };
    setArray([...array, newItem]);
  };

  return (
    <div>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item.value}</li>
        ))}
      </ul>
      <button onClick={addItem}>Click me</button>
    </div>
  );
}

export default Usestatearray;
