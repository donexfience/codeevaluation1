import React, { useEffect, useState } from "react";
import axios from "axios";
const Datafetch = () => {
  const [Loading, setLoading] = useState(false);
  const [Post, setPost] = useState({});
  const [Error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setPost(res.data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setError("something went wrong");
        setLoading(true);
        setPost({});
      });
  }, []);

  return (
    <div>
      {Loading ? <p>loading</p> : <p>{Post.title}</p>}
      {Error ? Error : null}
    </div>
  );
};

export default Datafetch;
