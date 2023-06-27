import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // API Call

    const timer = setInterval(() => {
      console.log(" Hello React OP !!");
    }, 1000);
    console.log("useEffect called !!");

    return () => {
      // clear the cache/memory
      clearInterval(timer);

      console.log("useEffect return !!");
    };
  }, []);
  console.log("render!!");

  return (
    <>
      <h2>Profile component here using functional component</h2>
      <h3>Name : {props.name}</h3>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>
    </>
  );
};

export default Profile;
