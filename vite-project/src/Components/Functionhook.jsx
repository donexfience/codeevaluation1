import React, { useState } from "react";

function Functionhook() {
  const [data, setData] = useState({ firstname: '', lastname: '' });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          <p>{data.firstname}</p>
          <p>{data.lastname}</p>
        </form>
      </div>
    </div>
  );
}

export default Functionhook;
