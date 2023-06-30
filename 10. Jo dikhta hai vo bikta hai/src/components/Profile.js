import { useEffect, useState } from "react";

const Profile = () => {
  const [count, setCount] = useState([]);

  useEffect(() => {
    // API Call
    getProfileInfo();
  }, []);

  const getProfileInfo = async () => {
    const data = await fetch("https://api.github.com/users/surajpatil6088");
    const json = await data?.json();

    console.log(json);
    setCount(json);
  }

  return (
    <>
      <h2>Profile component here using functional component</h2>
      <img src={count.avatar_url} alt="image"></img>
      <h3>Name : {count?.login}</h3>
      <h3>id : {count?.id}</h3>
      <h3>Bio : {count?.bio}</h3> 

    </>
  );
};

export default Profile;
